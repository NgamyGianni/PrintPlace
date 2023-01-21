const getLinkFromResult = (result) => JSON.parse(result).output[0];

export const sendPrompt = async (prompt) => {
    let returnValue = undefined;
    const key = "SkLemRdDUEb2w38hTuRRhBM5ol6u2pYU21YFnOuAXyvVC2JEliCsXkXlNrJP";

    const raw = {
        "key": key,
        "prompt": prompt,
        "negative_prompt": "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
        "width": "512",
        "height": "512",
        "samples": "1",
        "num_inference_steps": "20",
        "seed": null,
        "guidance_scale": 7.5,
        "webhook": null,
        "track_id": null
    }
    
    var headersOpt = {
        "content-type": "application/json",
    }
    
    const requestOptions = {
        method: 'POST',
        headers : headersOpt,
        body: JSON.stringify(raw),
        redirect: 'follow'
    };
        
    await fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions)
        .then(response => response.text())
        .then(result => {
            returnValue = getLinkFromResult(result)
        })
        .catch(error => console.log('error', error));

    
    return returnValue;
}

const handler = async (req) => {
    const key = "0abbda6719889bc3fa505490eed33aff6a18a59e";

    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Pinned to a specific version of Stable Diffusion
        // See https://replicate.com/stability-ai/stable-diffussion/versions
        version: "6359a0cab3ca6e4d3320c33d79096161208e9024d174b2311e5a21b6c7e1131c",
  
        // This is the text prompt that will be submitted by a form on the frontend
        input: { prompt: req },
      }),
    });

    let res = {
        "statusCode" : 0,
        "response" : {}
    };
  
    if (response.status !== 201) {
      let error = await response.json();
      res.statusCode = 500;
      res.response = JSON.stringify({ detail: error.detail });
    }
  
    const prediction = await response.json();
    res.statusCode = 201;
    res.response = prediction;

    return res;
}

//const result = await sendPrompt("bitcoin");
//console.log(result);
//console.log(JSON.parse(result).output[0]);

//const result = await handler("bitcoin");
//console.log(result.response.urls.get);