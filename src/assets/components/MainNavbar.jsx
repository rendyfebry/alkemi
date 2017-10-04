import React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'

import styles from './MainNavbar.css'

export default class MainNavbar extends React.Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false,
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}

	render() {
		return (
			<Navbar dark fixed="top" expand="md" className={styles.wrapper}>
				<NavbarBrand href="/" className={styles.navbarBrand}>
					Alkemi
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} className={styles.navbarToggler} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem className={styles.navItem}>
							<NavLink href="/about" className={styles.navLink}>
								About
							</NavLink>
						</NavItem>
						<NavItem className={styles.navItem}>
							<NavLink href="/login" className={styles.navLink}>
								Login
							</NavLink>
						</NavItem>
						<NavItem className={styles.navItem}>
							<NavLink href="/register" className={styles.navLinkRegister}>
								Register
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		)
	}
}
