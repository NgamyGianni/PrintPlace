import { useState } from "react"
import { Card, Textarea, Button, Radio, Image, Text, Grid, Input, Container } from "@nextui-org/react"
import { Loading } from "@nextui-org/react"
import RadioGroup from "@nextui-org/react/types/radio/radio-group"
import reactLogo from "../assets/react.svg"
import * as API from "../logic/ApiRequest"

type Label = "val" | "choice" | "image" | "isLoading"

interface LabelState {
	val: string
	choice: string
	image: string
	isLoading: boolean
}

type OptionsChoice = "Poster" | "NFT" | "Save" | "DownLoad"

export const Main = () => {
	const options: OptionsChoice[] = ["Poster", "NFT", "Save", "DownLoad"]

	const baseImage = "https://media.tenor.com/0SK8wi-u_gYAAAAd/no-signal-tv.gif"

	const [state, setState] = useState<LabelState>({
		val: "",
		choice: "",
		image: baseImage,
		isLoading: false
	})

	const changeState = (label: Label | Label[], value: any) => {
		console.log(typeof label)
		typeof label === "string"
			? setState((s) => ({ ...s, [label]: value }))
			: label.forEach((str, index) => setState((s) => ({ ...s, [str]: value[index] })))
	}

	const send = async (): Promise<void> => {
		changeState("isLoading", true)
		const new_image = (await API.sendPrompt(state.val)) as any
		changeState(["image", "isLoading"], [new_image, false])
	}

	const printOptions = (val: string): boolean => val === "ok"
	const printValidationButton = () => <Button onClick={() => console.log(state.choice)}>Validate !</Button>
	const printRadios = (option: string) => (
		<Radio value={option} name="displayChoice">
			{option}
		</Radio>
	)

	return (
		<Card variant="bordered">
			{state.isLoading ? (
				<Card css={{ width: "640px", height: "360px", display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Loading />
				</Card>
			) : (
				<Card.Image width="640px" height="360px" src={state.image} alt="Default Image" objectFit="cover" showSkeleton={true} />
			)}
			<Card.Footer css={{ justifyItems: "flex-start" }}>
				<Grid xs={8}>
					<Input
						css={{ width: "100%", height: "33%" }}
						status="primary"
						placeholder="Type your description"
						onKeyDown={(e) => {
							if (e.keyCode === 13) send()
						}}
						onChange={(e) => setState((s) => ({ ...s, val: e.target.value }))}
					/>
				</Grid>
				<Grid xs={4}>
					<Button onClick={() => send()}>Search</Button>
				</Grid>
				{printOptions(state.val) ? (
					<Radio.Group onChange={(optionChosed) => setState((s) => ({ ...s, choice: optionChosed }))}>
						{options.map((option) => printRadios(option))}
					</Radio.Group>
				) : (
					""
				)}
				{state.choice !== "" ? printValidationButton() : ""}
			</Card.Footer>
		</Card>
	)
}
