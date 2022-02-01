import React, { useState } from 'react'
import './sign-up.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../../assets/images/sign-up.png'

import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert'

function Register() {
  const history = useHistory()
  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    error_list: [],
  })

  const handleInput = (e) => {
    e.persist()
    setRegister({ ...registerInput, [e.target.name]: e.target.value })
  }

  const registerSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then((response) => {
      axios.post(`/api/register`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token)
          localStorage.setItem('auth_name', res.data.username)
          swal('Success', res.data.message, 'success')
          history.push('/')
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          })
        }
      })
    })
  }
  return (
    <div className="mainRegister">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex justify-content-center align-items-center ">
              <img src={img1} alt="" />
            </div>
            <div className="card-body">
              <h4 className="title text-center mt-4">Create a new account</h4>
              <form onSubmit={registerSubmit} className="form-box px-3">
                <div className="form-input">
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={registerInput.name}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-input">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={registerInput.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-input">
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerInput.password}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-input">
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Number Your Phone"
                    value={registerInput.phonenumber}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-block text-uppercase"
                  >
                    Register
                  </button>
                </div>

                <div className="text-center my-3">or register by</div>
                <div className="row mb-3">
                  <div className="col-4">
                    <Link
                      href="#"
                      className="btn btn-block btn-social btn-facebook"
                    >
                      facebook
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link
                      href="#"
                      className="btn btn-block btn-social btn-google"
                    >
                      google
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link
                      href="#"
                      className="btn btn-block btn-social btn-twitter"
                    >
                      twitter
                    </Link>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="text-center mb-2">
                  Do have an account?
                  <a href="sign-in.html" className="register-link">
                    Login here
                  </a>
                </div>
              </form>
            </div>
            <div className="img-right d-none d-md-flex "></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
