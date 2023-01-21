import axios from "axios"

const getLinkFromResultStableDiffusion = (result : any) => result.output[0];
const getLinkFromResultOpenAI = (result : any) => "";

const getLinkFromResultHandler = (result: any, provider : string) => { 
	switch (provider) {
		case "stablediffusion": return getLinkFromResultStableDiffusion(result);
		case "openai" : return getLinkFromResultOpenAI(result);
	}
}

export const sendPrompt = async (prompt: string) => {
	let returnValue = undefined
	const body = {
		"prompt" : prompt, 
		"provider" : "stablediffusion",
		"method" : ""
	}

	try {
		const result = await axios.post("http://127.0.0.1:3000/prompt", body)

		if(result !== undefined) {
			return getLinkFromResultHandler(result.data.result, body.provider)
		}
	return returnValue

	
	} catch (error: any) {
		console.log(error)
	}

}