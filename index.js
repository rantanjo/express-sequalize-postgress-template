const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
require("dotenv").config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("build"))
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to express server" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
