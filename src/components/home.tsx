import { useState } from 'react';
import { Card, Textarea, Button, Radio, Image, Text, Grid, Input } from '@nextui-org/react';
import RadioGroup from '@nextui-org/react/types/radio/radio-group';
import reactLogo from '../assets/react.svg';
import { sendPrompt } from '../logic/ApiRequest';


export const Main = () => {

    const options = [
        "Poster",
        "NFT",
        "Save",
        "DownLoad"
    ]

    const baseImage = "https://media.tenor.com/0SK8wi-u_gYAAAAd/no-signal-tv.gif";

    const [state, setState] = useState({
        val : "",
        choice : "",
        image : baseImage,
    })

    const changeState = (state : typeof useState, label : string, value : string) => {
        
    }

    const send = async (prompt : string) : Promise<void> => {
        const new_image = await sendPrompt(state.val);
        setState((s) => ({...s, image: new_image}))
    }

    const printOptions = (val : string) : boolean =>  val === "ok";
    const printValidationButton = () => <Button onClick={() => console.log(state.choice)}>Validate !</Button>
    const printRadios = (option : string) =>    <Radio value={option} name="displayChoice">{option}</Radio>

    return (
        <Card variant="bordered">
            <Card.Image 
                width="100%"
                height="100%"  
                src={state.image}
                alt="Default Image"
                objectFit="cover" 
            />
            <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Grid xs={8}>
                    <Input css={{width : "100%", height : "33%"}} status="primary" placeholder="Type your description" onKeyDown={e => {if (e.keyCode === 13)  send()}} onChange={e => setState((s) => ({...s, val: e.target.value}))} />
                </Grid>
                <Grid xs={4}>
                    <Button onClick={() => send()}>Search</Button>
                </Grid>
                {printOptions(state.val) ? <Radio.Group onChange={optionChosed => setState((s) => ({...s, choice: optionChosed}))}>{options.map(option => printRadios(option))}</Radio.Group> : ""}
                {state.choice !== "" ? printValidationButton() : ""}
            </Card.Footer>

        </Card>
)};