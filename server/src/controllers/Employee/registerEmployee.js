const Employee = require("../../models/Employee");
const { hashPassword } = require("../../utils/bcrypt");

const register = async (req, res) => {
  const {
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
    const userFoundEmail = await Employee.findOne({ email });
    if (userFoundEmail)
      return res.status(400).json({
        message: "Usuario ya existente",
      });

    const userFoundDni = await Employee.findOne({ dni });
    if (userFoundDni)
      return res.status(400).json({
        message: "Usuario ya existente",
      });

    const hashedPassword = await hashPassword(password);

    const userCreate = new Employee({
      name,
      dni,
      email,
      modules,
      phoneCode,
      phoneNumber,
      business,
      password: hashedPassword,
    });

    await userCreate.save();
    return res.status(200).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
module.exports = register;
