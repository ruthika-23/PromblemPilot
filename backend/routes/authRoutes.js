const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const upload = require("../middleware/upload");


router.post(
  "/register",
  registerUser
);


router.post(
  "/login",
  loginUser
);


router.get(
  "/profile",
  protect,
  getUserProfile
);


router.put(
  "/profile",
  protect,
  upload.single("profileImage"),
  updateUserProfile
);


module.exports = router;