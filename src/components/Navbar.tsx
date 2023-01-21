import { Navbar, Text, Button, Link } from '@nextui-org/react';

export const HeaderNavbar = () => {
    const pages : object = {"Try" : "#", "Explore" : "#"};

    const contentPages = (pages : object) => Object.entries(pages).map((k) => <Navbar.Link href={k[1]}>{k[0]}</Navbar.Link>)
    
    return (<Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            DesignR
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          {contentPages(pages)}
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>)
}