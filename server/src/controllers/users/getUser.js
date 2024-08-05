const Users = require("../../models/user")

const getUser = async (req, res) => {
    try {
        const userFind = await Users.find()
        res.status(200).json(userFind)

    } catch (error) {
        console.log(error);
    }
}

module.exports = getUser
