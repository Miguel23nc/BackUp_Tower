const Role = require("../../models/Role");
const User = require("../../models/user");
const { hashPassword } = require("../../utils/bcrypt");
const generatetoken = require("../../utils/jwt");
const register = async (req, res) => {
  const {
    name,
    ruc,
    email,
    role,
    module,
    submodules,
    business,
    password,
  } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({
        message: "Usuario ya existente",
      });
    
    const hashedPassword = await hashPassword(password);
    const userCreate = new User({
      name,
      ruc,
      email,
      role,
      module,
      submodules: submodules.map((submodule) => ({
        submoduleName: submodule.submodule,
        permissions: submodule.permissions,
      })),
      business,
      password: hashedPassword,
    });

    const userSaved = await userCreate.save();
    const token = generatetoken({ ruc: userSaved.ruc });
    res.cookie("token", token);
    return res.status(200).json(userSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
module.exports = register;
