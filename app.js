const express = require("express")
const { errorMiddleware } = require("./middleware/error")
const { notFoundMiddleware } = require("./middleware/notFound")
const { jwtRouter } = require("./router/jwtRouter")
const app = express()
require("dotenv").config()

const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api/jwt", jwtRouter)

app.use(errorMiddleware)
app.use(notFoundMiddleware)

const start = async () => {
	try {
		app.listen(port, () => {
			console.log(`listening on port=${port}`)
		})
	} catch (error) {
		console.log(error)
	}
}

start()
