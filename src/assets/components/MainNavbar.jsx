import React from 'react'
import PropTypes from 'prop-types'
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

const propTypes = {
	inverse: PropTypes.bool,
}

const defaultProps = {
	inverse: false,
}

class MainNavbar extends React.Component {
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

	get wrapperClassName() {
		const inverse = this.props.inverse
		const className = inverse ? `${styles.wrapper} ${styles.wrapperInverse}` : styles.wrapper
		return className
	}

	get navItemClassName() {
		const className = styles.navItem
		return className
	}

	get navLinkClassName() {
		const className = styles.navLink
		return className
	}

	render() {
		return (
			<Navbar dark fixed="top" expand="md" className={this.wrapperClassName}>
				<NavbarBrand href="/" className={styles.navbarBrand}>
					Alkemi
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} className={styles.navbarToggler} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem className={this.navItemClassName}>
							<NavLink href="/library" className={this.navLinkClassName}>
								Library
							</NavLink>
						</NavItem>
						<NavItem className={this.navItemClassName}>
							<NavLink href="/login" className={this.navLinkClassName}>
								Login
							</NavLink>
						</NavItem>
						<NavItem className={this.navItemClassName}>
							<NavLink href="/register" className={`${this.navLinkClassName} ${styles.navLinkRegister}`}>
								Register
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		)
	}
}

MainNavbar.propTypes = propTypes
MainNavbar.defaultProps = defaultProps

export default MainNavbar
