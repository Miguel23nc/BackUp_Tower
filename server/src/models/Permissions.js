const mongoose = require("mongoose");

const permissionsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true
    },
  },
  { timestamps: true }
);

const Permissions = mongoose.model("Permissions", permissionsSchema);
module.exports = Permissions;
