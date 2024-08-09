const mongoose = require("mongoose");

const businessSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;
