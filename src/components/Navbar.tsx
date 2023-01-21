import { Navbar, Text, Button, Link, Avatar } from "@nextui-org/react"

export const HeaderNavbar = () => {
	const pages: object = { Try: "#", Explore: "#" }
	const logged = true
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
				{!logged && (
					<>
						<Navbar.Link color="inherit" href="#">
							Login
						</Navbar.Link>
						<Navbar.Item>
							<Button auto flat as={Link} href="#">
								Sign Up
							</Button>
						</Navbar.Item>
					</>
				)}
				{logged && (
					<>
						<Navbar.Item>
							<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="lg" />
						</Navbar.Item>
						<Navbar.Item>TheMaoZedong</Navbar.Item>
					</>
				)}
			</Navbar.Content>
		</Navbar>
	)
}
