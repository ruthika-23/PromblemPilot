const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    bio: {
      type: String,
      default: ""
    },

    githubUrl: {
      type: String,
      default: ""
    },

    leetcodeUrl: {
      type: String,
      default: ""
    },

    profileImage: {
      type: String,
      default: ""
    },


  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);

