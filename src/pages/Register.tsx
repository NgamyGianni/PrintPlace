import { Button, Container, Input, Text } from "@nextui-org/react"
import React from "react"
import useAuthStore from "../store/authStore"
import { supabase } from "../supabase"

const Register = () => {
	const handleSubmit = async (e: React.FormEvent<unknown>) => {
		e.preventDefault()
		const form = e.currentTarget as HTMLFormElement
		const formData = new FormData(form)

		const email = formData.get("email")?.toString()
		const password = formData.get("password")?.toString()

		if (email !== undefined && password !== undefined) {
			console.log(email, password)
			const result = await supabase.auth.signUp({ email, password })
			console.log(result)
		}
	}
	return (
		<Container
			css={{
				marginTop: 20
			}}
			display="flex"
			alignItems="center"
			justify="center">
			<Text h2>DesignR</Text>
			<Container
				css={{
					marginTop: 30,
					gap: 16
				}}
				as="form"
				display="flex"
				alignItems="center"
				justify="center"
				direction="column"
				onSubmit={handleSubmit}>
				<Text h3>Register</Text>
				<Input name="email" width="300px" placeholder="Enter your email" />
				<Input.Password name="password" width="300px" placeholder="Password" />
				<Button
					type="submit"
					css={{
						width: "300px"
					}}>
					Create your account
				</Button>
			</Container>
		</Container>
	)
}

export default Register
