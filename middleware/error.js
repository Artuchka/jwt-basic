const { CustomError } = require("../error/customError")

const errorMiddleware = (err, req, res, next) => {
	console.log("err handler middleware ")
	if (err instanceof CustomError) {
		return res.status(err.code).json({
			success: false,
			msg: err.message,
		})
	}
	res.status(500).json({
		success: false,
		msg: err,
	})
}

module.exports = { errorMiddleware }
