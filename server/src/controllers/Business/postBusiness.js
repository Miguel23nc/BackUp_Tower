const Business = require("../../models/Business");

const createBusiness = async (req, res) => {
  try {
    const { name, description} = req.body;
    const newBusiness = new Business({
      name,
      description,
    });

    const savedBusiness = await newBusiness.save();
    return res.status(201).json(savedBusiness);
  } catch (error) {
    console.error("Error al crear empresa:", error);
    return res.status(500).json({ error: "Error al crear la empresa" });
  }
};

module.exports = createBusiness;
