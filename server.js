const express = require("express")
const catsRouter = require("./cats/cats-router")

const server = express()

server.use(express.json())

server.use("/api", catsRouter)

server.get("/", (req, res) => {
	res.json({
		message: "Welcome to CATS API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went meowrong",
	})
})


module.exports = server