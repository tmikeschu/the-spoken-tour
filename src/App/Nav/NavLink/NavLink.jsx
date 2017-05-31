import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const NavLink = props => (
  <Link {...props} activeClassName="active" />
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default NavLink
