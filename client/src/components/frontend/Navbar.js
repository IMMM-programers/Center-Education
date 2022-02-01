import React from 'react'
import { Link } from 'react-router-dom'

// import './home/Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid px-5">
        <Link className="navbar-brand">Navbar</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="navbarRightAlignExample">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
