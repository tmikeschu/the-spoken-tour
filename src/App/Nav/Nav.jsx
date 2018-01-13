import React from "react"
import { NavLink } from "react-router-dom"

const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`

const makeLink = ([to, label]) => onClick => (
  <NavLink
    onClick={onClick}
    className="Nav__link"
    activeClassName="Nav__link--active"
    key={to}
    to={`/${to}`}
  >
    <span>{label || capitalize(to)}</span>
    <div />
  </NavLink>
)

const links = [
  ["about", "Trip"],
  ["map"],
  ["podcast"],
  ["contact"],
  ["support"],
].map(makeLink)

const Nav = ({ display, onClick }) => (
  <article className={`Nav Nav--${display}`}>
    <Hamburger onClick={onClick} display={display} />
    <ul>{links.map(link => link(onClick))}</ul>
  </article>
)

const Hamburger = ({ display, onClick }) => (
  <article
    className={`Hamburger Hamburger--${display}`}
    onClick={onClick}
    role="button"
    tabIndex="0"
  >
    <div className="Hamburger__first" />
    <div className="Hamburger__second" />
    <div className="Hamburger__third" />
  </article>
)

export default Nav
