import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { BrowserRouter } from "react-router-dom"

// 2. Call `createTheme` and pass your custom values
const myDarkTheme = createTheme({
	type: "dark",
	theme: {
		colors: {
			// brand colors
			background: "#1d1d1d",
			text: "#fff"
		},
		space: {},
		fonts: {}
	}
})

const myLightTheme = createTheme({
	type: "light",
	theme: {
		colors: {
			// brand colors
			background: "#000000",
			text: "#000"
		},
		space: {},
		fonts: {}
	}
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<NextUIProvider theme={myDarkTheme}>
				<App />
			</NextUIProvider>
		</BrowserRouter>
	</React.StrictMode>
)
