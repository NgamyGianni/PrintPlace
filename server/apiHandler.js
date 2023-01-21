const stablediffusionRequest = async (prompt) => {
    const key = "G9v9j0btNQRJaQQnwsoFmTRUXIPv8cxZSWrSYMFrTl6dNSLGliVl79bh1o74";
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
	};

	const result = await axios.post("https://stablediffusionapi.com/api/v3/text2img", JSON.stringify(raw), {
		headers: {
			"Content-Type": "application/json"
		}
	});

	return result.data;
};

const openaiRequest = async (prompt, method) => {
	return "";
}


export const handler = (req) => {
	const body = req.body;

    switch (body.provider) {
        case "openai":
			return await openaiRequest(body.prompt, body.method);
            break;
		
		case "stablediffusion":
			return await stablediffusionRequest(body.prompt);
			break;
    }
};