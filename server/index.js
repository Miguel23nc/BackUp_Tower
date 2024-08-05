require("dotenv").config()
const { PORT } = process.env
const app = require("./src/app.js")
const connectDB = require("./src/dbConnection.js")

connectDB()

app.listen(3001)
console.log("server ok", PORT);
