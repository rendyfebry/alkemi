import React from 'react'
import ReactDOM from 'react-dom'

import {
	Container,
	Row,
	Col,
} from 'reactstrap'

import '../components/global.scss'
import styles from './Homepage.css'
import MainNavbar from '../components/MainNavbar'

const Homepage = () => (
	<div className={styles.wrapper}>
		<MainNavbar />
		<Container>
			<Row>
				<Col>
					Home Page
				</Col>
			</Row>
		</Container>
	</div>
)

ReactDOM.render(<Homepage />, document.getElementById('app'))
