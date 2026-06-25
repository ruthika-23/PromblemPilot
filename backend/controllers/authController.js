const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  res.json({
    _id: user._id,
    username: user.username,
    email: user.email,
    bio: user.bio,
    githubUrl: user.githubUrl,
    leetcodeUrl: user.leetcodeUrl,
    profileImage: user.profileImage,
    currentStreak: user.currentStreak,
    revisionCount: user.revisionCount
  });
};

const updateUserProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }


    user.username = req.body.username || user.username;
    user.bio = req.body.bio || user.bio;
    user.githubUrl = req.body.githubUrl || user.githubUrl;
    user.leetcodeUrl = req.body.leetcodeUrl || user.leetcodeUrl;


    if (req.file) {
      user.profileImage = `/uploads/${req.file.filename}`;
    }


    if (req.body.currentStreak !== undefined) {
      user.currentStreak = req.body.currentStreak;
    }


    if (req.body.revisionCount !== undefined) {
      user.revisionCount = req.body.revisionCount;
    }


    const updatedUser = await user.save();


    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      bio: updatedUser.bio,
      githubUrl: updatedUser.githubUrl,
      leetcodeUrl: updatedUser.leetcodeUrl,
      profileImage: updatedUser.profileImage,
      currentStreak: updatedUser.currentStreak,
      revisionCount: updatedUser.revisionCount
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };