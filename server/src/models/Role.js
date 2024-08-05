const mongoose = require("mongoose")

const roleSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    permissions: [{
        type: String,
        ref: 'Permissions'
    }],

}, { timestamps: true })

const Role = mongoose.model("Role", roleSchema)
module.exports = Role