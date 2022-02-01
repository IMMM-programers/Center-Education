import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

import VideoPopup from '../Popups/VideoCourse'

function ViewCourses() {
  const [videoPopup, setVideoPopup] = useState(false)
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Courses</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard / Courses</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category Name</th>
                  <th>Number of Student</th>
                  <th>Number of Video</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td width="5%">1</td>
                  <td width="12%">Titel 1</td>
                  <td width="22%">Description 1</td>
                  <td width="13%">Category Name</td>
                  <td width="15%">20</td>
                  <td width="13%">15</td>
                  <td width="8%">
                    <FontAwesomeIcon icon={faPen} className="" color="blue" />
                    <FontAwesomeIcon
                      icon={faTrash}
                      color="orange"
                      className=""
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <button
            type="button"
            onClick={() => setVideoPopup(true)}
            className="btn btn-primary"
          >
            Play
          </button>
          <VideoPopup trigger={videoPopup} setTrigger={setVideoPopup}>
            <iframe
              class="embed-responsive-item"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/qN3OueBm9F4"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </VideoPopup> */}
          {/* <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* <Link to="/admin/add-course" className="btn btn-primary btn-md mt-2">
            Add Course
          </Link> */}
        </div>
      </div>
    </div>
  )
}
export default ViewCourses
