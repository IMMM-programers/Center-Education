import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

function AddCourse() {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Courses</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard / Add Courses</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="title" className="control-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                name="title"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="descrip" className="control-label">
                Description
              </label>
              <input
                type="text"
                id="descrip"
                className="form-control"
                name="desctiption"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="image" className="control-label">
                Image
              </label>
              <input
                type="file"
                id="image"
                className="form-control"
                name="image"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="video" className="control-label">
                Video
              </label>
              <input
                type="text"
                className="form-control"
                id="video"
                name="video"
              />
            </div>

            <button type="submit" className="btn btn-primary px-5  float-end">
              Submit
            </button>

            <button
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
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
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
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AddCourse
