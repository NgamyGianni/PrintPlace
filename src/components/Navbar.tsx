import { Navbar, Text, Button, Link, Avatar, User } from "@nextui-org/react"
import { Link as RouterLink } from "react-router-dom"
import useAuthStore from "../store/authStore"

export const HeaderNavbar = () => {
	const pages: object = { Try: "#", Explore: "#" }
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
	const contentPages = (pages: object) => Object.entries(pages).map((k) => <Navbar.Link href={k[1]}>{k[0]}</Navbar.Link>)

	return (
		<Navbar isBordered variant="floating">
			<Navbar.Brand>
				<Text b color="inherit" hideIn="xs">
					DesignR
				</Text>
			</Navbar.Brand>
			<Navbar.Content hideIn="xs">{contentPages(pages)}</Navbar.Content>
			<Navbar.Content>
				{!isLoggedIn && (
					<>
						<Navbar.Link as={RouterLink} color="inherit" to="/login">
							Login
						</Navbar.Link>
						<Navbar.Item>
							<Navbar.Link as={RouterLink} to="/register">
								<Button auto flat>
									Sign Up
								</Button>
							</Navbar.Link>
						</Navbar.Item>
					</>
				)}
				{isLoggedIn && (
					<>
						<Navbar.Item>
							<User src="https://i.pravatar.cc/150?u=a042581f4e29026704d" name="TheMaoZedong" />
						</Navbar.Item>
					</>
				)}
			</Navbar.Content>
		</Navbar>
	)
}
