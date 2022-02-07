import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sign-up.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../img/img1.webp";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, phoneNumber } = this.state;
    const type = "Student";
    axios
      .post("/api/users/createUser", { name, email, password, phoneNumber, type })
      .then((response) => {
        // localStorage.setItem("token", response.data.token);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
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
              <h4 className="title text-center mt-4">Create a new account</h4>
              <form onSubmit={this.handleSubmit.bind(this)} className="form-box px-3">
                <div className="form-input">
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
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
                    tabindex="10"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
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
                    value={this.state.password}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="form-input">
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Number Your Phone"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="mb-3">
                  <button tabindex="submit" className="btn btn-block text-uppercase">
                    Register
                  </button>
                </div>

                <div className="text-center my-3">or register by</div>
                <div className="row mb-3">
                  <div className="col-4">
                    <a href="#" className="btn btn-block btn-social btn-facebook">
                      facebook
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="btn btn-block btn-social btn-google">
                      google
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#" className="btn btn-block btn-social btn-twitter">
                      twitter
                    </a>
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
    );
  }
}

export default SignUp;
