import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../img/img1.webp";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange(e) {
    this.setState({
      [e.target]: e.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex justify-content-center align-items-center ">
              <img src={img1} alt="" />
            </div>
            <div className="card-body">
              <h4 className="title text-center mt-4">Login into account</h4>
              <form action="" className="form-box px-3">
                <div className="form-input">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    tabindex="10"
                    required
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
                    required
                  />
                </div>
                <div className="mb-3">
                  <button
                    tabindex="submit"
                    className="btn btn-block text-uppercase"
                  >
                    Login
                  </button>
                </div>
                <div className="text-right">
                  <a href="" className="forget-link">
                    Forget Password?
                  </a>
                </div>
                <div className="text-center my-3">or login with</div>
                <div className="row mb-3">
                  <div className="col-4">
                    <a
                      href=""
                      className="btn btn-block btn-social btn-facebook"
                    >
                      facebook
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="" className="btn btn-block btn-social btn-google">
                      google
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="" className="btn btn-block btn-social btn-twitter">
                      twitter
                    </a>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="text-center mb-2">
                  Don't have an account?
                  <a href="/signUp" className="register-link">
                    Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
