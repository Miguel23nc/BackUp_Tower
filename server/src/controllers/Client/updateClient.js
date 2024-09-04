const Client = require("../models/Client");

const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const client = await Client.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    return res.json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = updateClient;
