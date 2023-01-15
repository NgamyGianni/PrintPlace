const axios = require("axios")
const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

app.post("/prompt", async (req, res) => {
	const key = ""
	const raw = {
		key: key,
		prompt: req.body.prompt,
		negative_prompt:
			"((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
		width: "512",
		height: "512",
		samples: "1",
		num_inference_steps: "20",
		seed: null,
		guidance_scale: 7.5,
		webhook: null,
		track_id: null
	}

	const result = await axios.post("https://stablediffusionapi.com/api/v3/text2img", JSON.stringify(raw), {
		headers: {
			"Content-Type": "application/json"
		}
	})

	res.send({
		result: result.data
	})
})

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
