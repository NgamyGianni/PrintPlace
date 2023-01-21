import reactLogo from "./assets/react.svg"
import "./App.css"
import { HeaderNavbar } from "./components/Navbar"
import { Container } from "@nextui-org/react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"

function App() {
	return (
		<Container
			css={{
				maxWidth: "100%"
			}}>
			<HeaderNavbar />
			<Routes>
				<Route
					path="/"
					element={
						<Container
							css={{
								marginTop: 20,
								maxWidth: "1280px",
								margin: "0 auto",
								padding: "2rem",
								textAlign: "center"
							}}>
							<Home />
						</Container>
					}
				/>
			</Routes>
		</Container>
	)
}

export default App
