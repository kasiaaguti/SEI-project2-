import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.toggleNavbar = this.toggleNavbar.bind(this)

  }


  toggleNavbar() {
    console.log(this.props)
    this.setState({ navbarOpen: !this.state.navbarOpen})
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (

      <nav className="navbar is-link">


        <div className="navbar-brand">
          <Link to="/" className="navbar-item"><strong>Digital Nomads Hub</strong></Link>
          <a role="button" className= {`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.toggleNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/map" className="navbar-item">Map</Link>
            <a href="https://iamaileen.com/how-to-become-a-digital-nomad-guide//" target="_blank" rel="noopener noreferrer" className="navbar-item">Blog</a>
            <a href="https://www.indeed.co.uk/Digital-jobs-in-Remote" target="_blank" rel="noopener noreferrer" className="navbar-item">Jobs</a>
            <a  href="https://github.com/kasiaaguti/SEI-project2-" id="github-icon" target="_blank"></a>
          </div>

        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar)
