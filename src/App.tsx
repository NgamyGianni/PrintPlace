import reactLogo from "./assets/react.svg"
import "./App.css"
import { HeaderNavbar } from "./components/Navbar"
import { Container } from "@nextui-org/react"
import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { Home } from "./pages/Home"

function App() {
	return (
		<Container
			css={{
				maxWidth: "100%"
			}}>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<HeaderNavbar />
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
						</>
					}
				/>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Container>
	)
}

export default App
