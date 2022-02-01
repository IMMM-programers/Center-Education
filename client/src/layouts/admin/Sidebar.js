import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTachometerAlt,
  faColumns,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>

          <Link className="nav-link" to="/admin/dashboard">
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={faTachometerAlt} />
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </Link>

          <div className="sb-sidenav-menu-heading">Interface</div>
          {/* Teacher */}
          <Link
            className="nav-link collapsed"
            to="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTeacher"
            aria-expanded="false"
            aria-controls="collapseTeacher"
          >
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={faColumns} />
            </div>
            Teachers
            <div className="sb-sidenav-collapse-arrow">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </Link>
          <div
            className="collapse"
            id="collapseTeacher"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              <Link className="nav-link" to="/admin/view-teacher">
                View Teacher
              </Link>
              <Link className="nav-link" to="/admin/add-teacher">
                Add Teacher
              </Link>
            </nav>
          </div>

          {/* Course */}
          <Link
            className="nav-link collapsed"
            to="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseCourse"
            aria-expanded="false"
            aria-controls="collapseCourse"
          >
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={faColumns} />
            </div>
            Courses
            <div className="sb-sidenav-collapse-arrow">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </Link>
          <div
            className="collapse"
            id="collapseCourse"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              <Link className="nav-link" to="/admin/view-course">
                View Course
              </Link>
              <Link className="nav-link" to="/admin/add-course">
                Add Course
              </Link>
            </nav>
          </div>
          <div className="sb-sidenav-menu-heading">Addons</div>
          <Link className="nav-link" to="/admin/view-message">
            <div className="sb-nav-link-icon">
              <i className="fas fa-table"></i>
            </div>
            Messages
          </Link>
          <Link className="nav-link" to="/admin/view-ads">
            <div className="sb-nav-link-icon">
              <i className="fas fa-chart-area"></i>
            </div>
            Ads
          </Link>
        </div>
        <Link className="nav-link" to="/">
          <div className="sb-nav-link-icon">
            <i className="fas fa-chart-area"></i>
          </div>
          Logout
        </Link>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  )
}
export default Sidebar
