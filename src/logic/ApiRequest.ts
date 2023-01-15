import axios from "axios"

const getLinkFromResult = (result: any) => result.output[0]

export const sendPrompt = async (prompt: string) => {
	let returnValue = undefined

	try {
		const result = await axios.post("http://127.0.0.1:3000/prompt", {
			prompt
		})

		if(result !== undefined) {
			return getLinkFromResult(result.data.result)
		}
	return returnValue

	
	} catch (error: any) {
		console.log(error)
	}

}

const handler = async (req: any) => {
	const key = "0abbda6719889bc3fa505490eed33aff6a18a59e"

	const response = await fetch("https://api.replicate.com/v1/predictions", {
		method: "POST",
		headers: {
			Authorization: `Token ${key}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			// Pinned to a specific version of Stable Diffusion
			// See https://replicate.com/stability-ai/stable-diffussion/versions
			version: "6359a0cab3ca6e4d3320c33d79096161208e9024d174b2311e5a21b6c7e1131c",

			// This is the text prompt that will be submitted by a form on the frontend
			input: { prompt: req }
		})
	})

	let res = {
		statusCode: 0,
		response: {}
	}

	if (response.status !== 201) {
		let error = await response.json()
		res.statusCode = 500
		res.response = JSON.stringify({ detail: error.detail })
	}

	const prediction = await response.json()
	res.statusCode = 201
	res.response = prediction

	return res
}

//const result = await sendPrompt("bitcoin");
//console.log(result);
//console.log(JSON.parse(result).output[0]);

//const result = await handler("bitcoin");
//console.log(result.response.urls.get);
