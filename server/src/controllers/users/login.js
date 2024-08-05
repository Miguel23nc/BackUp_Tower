const { compare } = require("bcrypt");
const User = require("../../models/user");
const generatetoken = require("../../utils/jwt");

const login = async (req, res) => {

    const { email, password } = req.body

    try {
        if (!email || !password) {
            return res.status(200).json({ message: "Falta email o password" })
        }
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }
        const response = await compare(password, user.password)
        if (!response) return res.status(400).json({ message: "Contraseña incorrecta" });
        const userData = {
            ruc: user.ruc,
            email: user.email,
            rol: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }

        const token = generatetoken({ ruc: user.ruc })
        res.cookie("token", token)
        res.status(200).json(userData)

    } catch (error) {
        return res.status(400).json({ message: "error en login" })
    }
}
module.exports = login