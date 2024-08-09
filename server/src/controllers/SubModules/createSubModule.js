const Submodule = require("../../models/SubModule");

const createSubmodule = async (req, res) => {
  const { name, description, moduleId } = req.body;
  try {
    const newSubmodule = new Submodule({
      name,
      description,
      module: moduleId,
    });

    const savedSubmodule = await newSubmodule.save();
    return res.status(200).json(savedSubmodule)
  } catch (error) {
    console.log("error",error);
  }
};

module.exports = createSubmodule;
