const mongoose = require("mongoose");

// Schema of User with types
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    sex: {
      type: String,
    },
    password: {
      type: String,
    },
    dob: {
      type: String,
    },
    mobile: Number,
    height: Number,
    weight: Number,
  },
  {
    versionKey: false,
  }
);

// users Model With Collect name - users
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
