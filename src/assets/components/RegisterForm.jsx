import React from 'react'
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap'

// import styles from './RegisterForm.css'

const RegisterForm = props => (
	<div {...props}>
		<Form>
			<Container>
				<Row>
					<Col>
						<FormGroup>
							<Label for="first_name">First Name</Label>
							<Input
								type="text"
								name="first_name"
								placeholder="John"
							/>
						</FormGroup>
					</Col>

					<Col>
						<FormGroup>
							<Label for="last_name">Last Name</Label>
							<Input
								type="text"
								name="last_name"
								placeholder="Doe"
							/>
						</FormGroup>
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<Col>
						<FormGroup>
							<Label for="email">Email</Label>
							<Input
								type="email"
								name="email"
								placeholder="email@example.com"
							/>
						</FormGroup>
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<Col>
						<FormGroup>
							<Label for="password">Password</Label>
							<Input
								type="password"
								name="password"
								placeholder="*******"
							/>
						</FormGroup>
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<Col>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" />{' '}
								Agree
							</Label>
						</FormGroup>
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<Col>
						<Button>
							Register
						</Button>
					</Col>
				</Row>
			</Container>

		</Form>
	</div>
)

export default RegisterForm
