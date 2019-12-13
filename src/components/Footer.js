import React from 'react'
import { Link } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns is-mobile">
              <div className="column is-10">
                <section className="navbar-item" style={{color: `white`}}>
                  Actor and Model
                </section>
              </div>
              <div className="column is-1">
                <section className="menu">
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                </section>
              </div>
              <div className="column is-1">
                <section>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
