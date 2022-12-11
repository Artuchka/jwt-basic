const loginUser = async (req, res) => {
	res.status(200).json({
		success: true,
		msg: "logged in",
	})
}

module.exports = { loginUser }
