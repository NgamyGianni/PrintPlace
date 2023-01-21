import reactLogo from "./assets/react.svg"
import "./App.css"
import { Main } from "./pages/home"
import { HeaderNavbar } from "./components/Navbar"
import { Container } from "@nextui-org/react"

function App() {
	return (
		<Container
			css={{
				maxWidth: "100%"
			}}>
			<HeaderNavbar />
			<Container
				css={{
					marginTop: 20,
					maxWidth: "1280px",
					margin: "0 auto",
					padding: "2rem",
					textAlign: "center"
				}}>
				<Main />
			</Container>
		</Container>
	)
}

export default App
