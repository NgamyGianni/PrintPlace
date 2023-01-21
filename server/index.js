const axios = require("axios")
const express = require("express")
const cors = require("cors")

import { handler } from "./apiHandler.js";

const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

app.post("/prompt", async (req, res) => {
	const response = await handler(req);

	res.send({
		result: response
	})
})

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
