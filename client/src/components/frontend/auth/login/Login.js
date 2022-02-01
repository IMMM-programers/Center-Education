import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import swal from 'sweetalert'

import { Link, useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../../assets/images/sign-up.png'

function Login() {
  const history = useHistory()
  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
  })

  const handleChange = (e) => {
    e.persist()
    setLogin({ ...loginInput, [e.target.name]: e.target.value })
  }

  const loginSubmit = (e) => {
    e.preventDefault()

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then((response) => {
      axios.post(`api/login`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token)
          localStorage.setItem('auth_name', res.data.username)
          swal('Success', res.data.message, 'success')
          history.push('/admin/dashboard')
        } else if (res.data.status === 401) {
          swal('Warning', res.data.message, 'Warning')
        } else {
          setLogin({
            ...loginInput,
            error_list: res.data.validation_errors,
          })
        }
      })
    })
  }

  return (
    <div className="mainLogin">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex justify-content-center align-items-center ">
              <img src={img1} alt="" />
            </div>
            <div className="card-body">
              <h4 className="title text-center mt-4">Login into account</h4>
              <form onSubmit={loginSubmit} className="form-box px-3">
                <div className="form-input">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    tabIndex="10"
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-block text-uppercase"
                  >
                    Login
                  </button>
                </div>
                <div className="text-right">
                  <Link to="/" className="forget-link">
                    Forget Password?
                  </Link>
                </div>
                <div className="text-center my-3">or login with</div>
                <div className="row mb-3">
                  <div className="col-4">
                    <Link
                      to="/"
                      className="btn btn-block btn-social btn-facebook"
                    >
                      facebook
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link
                      to="/"
                      className="btn btn-block btn-social btn-google"
                    >
                      google
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link
                      to="/"
                      className="btn btn-block btn-social btn-twitter"
                    >
                      twitter
                    </Link>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="text-center mb-2">
                  Don't have an account?
                  <a href="/register" className="register-link">
                    Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
