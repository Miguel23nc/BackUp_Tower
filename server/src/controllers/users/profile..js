const User = require("../../models/user");

const profile = async (req, res) => {
    try {
        const userFound = await User.findOne({ ruc: req.user.ruc })
        if (!userFound) return res.status(400).json({ message: "Usuario no Encontrado" })
        return res.json({
            ruc: userFound.ruc,
            name: userFound.name,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error })
    }

}
module.exports = profile