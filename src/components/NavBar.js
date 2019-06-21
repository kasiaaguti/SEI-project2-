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
        <a href="https://iamaileen.com/how-to-become-a-digital-nomad-guide//" target="_blank" rel="noopener noreferrer" className="navbar-item">Blog</a>
        <a href="https://jobs.remoteworkhub.com/jobs/search/" target="_blank" rel="noopener noreferrer" className="navbar-item">Jobs</a>
      </div>
    </nav>
  )
}

export default NavBar
