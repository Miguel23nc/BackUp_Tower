const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const { JWT_SECRET } = process.env;

const verifyToken = async (req, res) => {
    const { token } = req?.cookies;
    if (!token) {
        return res.status(401).json({
            message: "No hay token "
        })
    }
    jwt.verify(token, JWT_SECRET, async (err, user) => {
        if (err) res.status(403).json({ message: err })
        const userFound = await User.findOne({ ruc: user.ruc })
        if (!userFound) return res.status(401).json({ message: "No se encuentra este usuario" })
        return res.json({
            ruc: userFound.ruc,
            email: userFound.email,
            rol: userFound.role
        })
    })

}
module.exports = verifyToken
