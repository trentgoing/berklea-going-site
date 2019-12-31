import React from 'react'
import { Link } from 'gatsby'
// import logo from '../img/logo.svg'
import instagram from '../../img/social/instagram.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    let visibility = !!this.props.navbarHidden ? 'hidden' : 'visible';
    return (
      <nav
        className={`navbar is-transparent ${this.state.navBarActiveClass} $`}
        role="navigation"
        aria-label="main-navigation"
        style={{
          visibility: visibility
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link to="/" className="navbar-item" title="Logo">
                Home {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
              </Link>
              <Link className="navbar-item " to="/#about-me">
                About
              </Link>
              <Link className="navbar-item" to="/resume">
                Resume
              </Link>
              <Link className="navbar-item" to="/gallery">
                Photo Gallery
              </Link>
              <Link className="navbar-item" to="/media">
                Media
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end columns">
              {/* <div className="column is-2 social has-text-justified"> */}
                <a title="instagram" href="https://www.instagram.com/berkleagoing/?hl=en" className="navbar-item"> 
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em', fill: 'white' }}
                  />
                </a>
              {/* </div> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
