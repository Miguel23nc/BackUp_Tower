const Business = require("../../models/BusinessEmployee");

const getBusiness = async (req, res) => {
    try {
        const rolesFound = await Business.find()
        return res.status(201).json(rolesFound);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
}
module.exports = getBusiness