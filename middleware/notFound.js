const notFoundMiddleware = (req, res, next) => {
	res.status(404).json({
		success: false,
		msg: `no such route`,
	})
}

module.exports = { notFoundMiddleware }
