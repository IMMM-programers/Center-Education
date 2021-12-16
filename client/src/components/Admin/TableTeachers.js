import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">N0.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Category</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mohammed</td>
              <td>example@gmail.com</td>
              <td>Graphic Design</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn" style={button}>
          Add New Teacher
        </button>
      </div>
    )
  }
}

const button = {
  backgroundColor: '#172e88',
  color: '#dbe5ea',
  borderRadius: '10px',
  fontSize: '18px',
  fontWeight: '600',
}

export default SignUp
