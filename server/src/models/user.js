const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ruc: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      ref: "Role",
    },
    module: {
      type: String,
      ref: "Module",
    },
    submodules: [
      {
        submoduleName: {
          type: String,
          ref: "Submodule",
        },
        permissions: [
          {
            type: String,
            ref: "Permission",
          },
        ],
      },
    ],
    business: {
      type: String,
      ref: "Business",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
