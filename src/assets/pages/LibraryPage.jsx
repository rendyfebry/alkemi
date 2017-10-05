import React from 'react'
import ReactDOM from 'react-dom'

import {
	Container,
	Row,
	Col,
} from 'reactstrap'

import '../components/global.scss'
import styles from './LibraryPage.css'
import MainNavbar from '../components/MainNavbar'

const LibraryPage = () => (
	<div className={styles.wrapper}>
		<MainNavbar />
		<section className={styles.hero}>
			<Container fluid>
				<Row>
					<Col>
						Library Page
					</Col>
				</Row>
			</Container>
		</section>
	</div>
)

ReactDOM.render(<LibraryPage />, document.getElementById('app'))
