const Employee = require("../../models/Employee");
const { hashPassword } = require("../../utils/bcrypt");

const updateEmployeePartial = async (req, res) => {
  
  const {
    _id,
    name,
    dni,
    email,
    modules,
    phoneCode,
    phoneNumber,
    business,
    password,
  } = req.body;

  try {
    const userFound = await Employee.findById(_id);

    if (!userFound) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (name) userFound.name = name;
    if (dni) userFound.dni = dni;
    if (email) userFound.email = email;
    if (modules) userFound.modules = modules;
    if (phoneCode) userFound.phoneCode = phoneCode;
    if (phoneNumber) userFound.phoneNumber = phoneNumber;
    if (business) userFound.business = business;

    if (password) {
      userFound.password = await hashPassword(password);
    }

    await userFound.save();

    return res.status(200).json({
      message: "Usuario actualizado correctamente",
      updatedUser: userFound,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updateEmployeePartial;
