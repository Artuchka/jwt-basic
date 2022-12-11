const jwt = require("jsonwebtoken")

const { CustomError } = require("../error/customError")

const loginUser = async (req, res) => {
	const { username, password } = req.body
	console.log(username, password)
	const promise = await new Promise((res, rej) => {
		setTimeout(() => {
			res()
		}, 1000)
	})
	if (!username || !password) {
		throw new CustomError(400, "please provide credentials")
	}

	// silly id  - just for testing cuz we have no database rn
	const id = new Date().getDate()
	// payload should be small, secret salt should be secret, experation should be not big....
	const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
		expiresIn: "3d",
	})

	res.status(200).json({
		success: true,
		msg: "user created",
		token,
	})
}

const dashboard = async (req, res) => {
	const randomNumber = Math.floor(Math.random() * 1000)
	res.json({
		success: true,
		msg: `Hello, ${req.user.username}! Your secret number is ${randomNumber}`,
	})
}
module.exports = { loginUser, dashboard }
