import React from 'react'
import { Link } from 'react-router-dom'

function AddTeacher() {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Add Teacher</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard / Add Teacher</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="full_name" className="control-label">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                className="form-control"
                name="full_name"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email" className="control-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password" className="control-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="phone_number" className="control-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone_number"
                name="phoneNumber"
              />
            </div>

            <button type="submit" className="btn btn-primary px-5  float-end">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AddTeacher
