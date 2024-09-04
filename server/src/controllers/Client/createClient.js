const Client = require("../../models/Client");

const createClient = async (req, res) => {
  try {
    const {
      razonSocial,
      ruc,
      direction,
      phoneCode,
      phoneNumber,
      email,
      economicSector,
      condition,
      directory,
    } = req.body;

    if (
      !razonSocial ||
      !ruc ||
      !direction ||
      !phoneCode ||
      !phoneNumber ||
      !email ||
      !economicSector ||
      !condition
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (directory && directory.length === 0) {
      return res.status(400).json({
        message: "All elements of directory are required",
      });
    }

    const client = new Client({
      razonSocial,
      ruc,
      direction,
      phoneCode,
      phoneNumber,
      email,
      economicSector,
      condition,
      directory,
    });

    await client.save();

    return res
      .status(201)
      .json({ message: "Client created successfully", client });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create client",
      error: error.message,
    });
  }
};

module.exports = createClient;
