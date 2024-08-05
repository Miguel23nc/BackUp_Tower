const Role = require("../../models/Role");
const User = require("../../models/user");
const { hashPassword } = require("../../utils/bcrypt");
const generatetoken = require("../../utils/jwt");
const register = async (req, res) => {
    const { name, ruc, email, password, role } = req.body

    try {
        const userFound = await User.findOne({ email })
        if (userFound) return res.status(400).json({
            message: "Usuario ya existente"
        })
        const roleFound = await Role.findOne({ name: role })
        if (!roleFound) return res.status(400).json({
            message: "Rol no existente"
        })
        const hashedPassword = await hashPassword(password)
        const userCreate = new User({
            name,
            ruc,
            email,
            password: hashedPassword,
            role: roleFound.name
        })
        const userSaved = await userCreate.save()
        const token = generatetoken({ ruc: userSaved.ruc })
        res.cookie("token", token)
        return res.status(200).json({
            ruc: userSaved.ruc,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            rol: userSaved.role
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error })
    }
}
module.exports = register