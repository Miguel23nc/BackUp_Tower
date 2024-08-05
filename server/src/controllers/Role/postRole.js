
const Permissions = require("../../models/Permissions");
const Role = require("../../models/Role");

const postRole = async (req, res) => {
    const { name, permissions } = req.body;
    try {

        const roleExists = await Role.findOne({ name });
        if (roleExists) {
            return res.status(400).json({
                message: "Área ya existente"
            });
        }
        const permissionsFound = await Permissions.find({ name: permissions })

        if (permissionsFound.length !== permissions.length) {
            return res.status(400).json({
                message: "Uno o más permisos no existen"
            });
        }

        const newRole = new Role({ name, permissions });
        await newRole.save();

        return res.status(201).json({
            message: 'Role created successfully',
            role: newRole
        });
    } catch (error) {role
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
}
module.exports = postRole