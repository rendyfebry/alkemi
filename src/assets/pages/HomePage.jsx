import React from 'react'
import ReactDOM from 'react-dom'

import {
	Container,
	Row,
	Col,
} from 'reactstrap'

import '../components/global.scss'
import styles from './HomePage.css'
import MainNavbar from '../components/MainNavbar'
import RegisterForm from '../components/RegisterForm'

const HomePage = () => (
	<div className={styles.wrapper}>
		<MainNavbar inverse />
		<Container fluid className={styles.hero}>
			<Row className={styles.heroRow}>
				<Col className={styles.heroColLeft}>
					<TaglineGroup />
				</Col>
				<Col className={styles.heroColLeft}>
					<RegisterForm className={styles.registerForm} />
				</Col>
			</Row>
		</Container>
	</div>
)

const TaglineGroup = () => (
	<div>
		<h1>
			&lt; H1 &gt; <br />&emsp;&ensp;Learn To Code By Yourself <br />&lt; &#47;H1 &gt;
		</h1>
		<p>
			Code Alkemi has many course about software development, programming, and many more.
			Choose your favourite video from multiple topics, JavaScript, PHP & Python.
			Learn to code and get the skills you need to improve your career.
		</p>
	</div>
)

ReactDOM.render(<HomePage />, document.getElementById('app'))
