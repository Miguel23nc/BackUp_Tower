const Module = require("../../models/Module")

const createModule = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newModule = new Module({
      name,
      description,
    });

    const savedModule = await newModule.save();
    console.log("Módulo creado:", savedModule);
    return res.status(201).json(savedModule);
  } catch (error) {
    console.error("Error al crear módulo:", error);
    return res.status(500).json({ error: "Error al crear el módulo" });
  }
};

module.exports = createModule;
