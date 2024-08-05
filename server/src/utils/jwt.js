require("dotenv").config()
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = process.env


const generatetoken = (user) => {
    try {
        const payload = {
            email: user.email,
            ruc: user.ruc,
            rol: user.role
        }
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });
    } catch (error) {
        console.log(error);
    }

}

module.exports = generatetoken