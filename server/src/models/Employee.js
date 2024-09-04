const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dni: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    modules: [
      {
        name: {
          type: String,
          ref: "Module",
        },
        submodule: {
          name: {
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
      },
    ],
    phoneCode: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    business: {
      type: String,
      ref: "Business",
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("User", employeeSchema);
module.exports = Employee;
