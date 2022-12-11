const express = require("express")
const { loginUser, dashboard } = require("../controllers/login")
const { authMiddleware } = require("../middleware/auth")
const router = express.Router()

router.route("/").get((req, res) => {
	res.status(200).json({
		success: true,
	})
})

router.route("/login").post(loginUser)

router.use("/dashboard", authMiddleware)
router.route("/dashboard").get(dashboard)

router.route("/:id").get((req, res) => {
	res.status(200).json({
		success: true,
		id: req.params.id,
	})
})

module.exports = { jwtRouter: router }
