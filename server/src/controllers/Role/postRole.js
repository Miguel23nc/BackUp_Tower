const Permissions = require("../../models/Permissions");
const Role = require("../../models/Role");

const postRole = async (req, res) => {
  const { name, description } = req.body;
  try {
    const roleExists = await Role.findOne({ name });
    if (roleExists) {
      return res.status(400).json({
        message: "El rol ya existe",
      });
    }

    const newRole = new Role({ 
      name, 
      description
    });
    await newRole.save();


    return res.status(201).json({
      message: "Rol creado exitosamente",
      role: newRole,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error del servidor", error });
  }
};

module.exports = postRole;
