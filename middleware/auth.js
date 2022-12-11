const { CustomError } = require("../error/customError")
const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
	const { authorization: authHeader } = req.headers
	const regex = /Bearer /
	if (!authHeader || !authHeader.match(regex)) {
		throw new CustomError(401, "unauthorized")
	}

	const token = authHeader.split(" ")[1]

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		console.log(decoded)
		const { id, username } = decoded
		req.user = { id, username }
		next()
	} catch (error) {
		throw new CustomError(401, "not authorized for this route")
	}
}

module.exports = { authMiddleware }
