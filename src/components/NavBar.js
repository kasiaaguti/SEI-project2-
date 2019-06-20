import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar is-link">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Digital Nomads</Link>
      </div>

      <div className="navbar-end">
        <Link to="/map" className="navbar-item">Map</Link>
        <Link to="/blog" className="navbar-item">Blog</Link>
      </div>
    </nav>
  )
}

export default NavBar
