import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar is-warning">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">CheeseBored</Link>
      </div>
      <div className="navbar-end">
        <Link to="/map" className="navbar-item">Map</Link>
      </div>
    </nav>
  )
}

export default NavBar
