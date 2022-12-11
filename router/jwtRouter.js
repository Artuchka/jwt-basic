const express = require("express")
const { loginUser } = require("../controllers/login")
const router = express.Router()

router.route("/").get((req, res) => {
	res.status(200).json({
		success: true,
	})
})

router.route("/login").get(loginUser)

router.route("/:id").get((req, res) => {
	res.status(200).json({
		success: true,
		id: req.params.id,
	})
})

module.exports = { jwtRouter: router }
