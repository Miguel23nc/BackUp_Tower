const Role = require("../../models/Role");

const getRoles = async (req, res) => {
    try {

        const rolesFound = await Role.find();
        return res.status(201).json(
            rolesFound
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
}
module.exports = getRoles