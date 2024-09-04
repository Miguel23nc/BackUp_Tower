const Client = require("../../models/Client");

const deleteClient = async (req, res) => {
    
  try {
    const { id } = req.params;
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    await client.remove();

    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = deleteClient;
