import React from 'react';


class Signup extends React.Component{
    state = {
        email: "",
        password: ""
    };

    handleChange(e){
        this.setState({
            [e.target]: e.target.value,
        })
    }

    render(){
        return (
            <div className="container ">
            <div className="row px-3">
                <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                    <div className="img-left d-none d-md-flex justify-content-center align-items-center ">
                    <img src="sign-up.webp" alt="" />
                    </div>
                    <div className="card-body">
                        <h4 className="title text-center mt-4">
                            Create a new account
                        </h4>
                        <form action="" className="form-box px-3">
                            <div className="form-input">
                                <span><i className="fa fa-user"></i></span>
                                <input type="name" name="name" placeholder="Name" required />
                            </div>
                            <div className="form-input">
                                <span><i className="fa fa-envelope"></i></span>
                                <input type="email" name="email" placeholder="Email" tabindex="10" required/>
                            </div>
                            <div className="form-input">
                                <span><i className="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Password" required />
                            </div>
                            <div className="form-input">
                                <span><i className="fa fa-lock"></i></span>
                                <input type="password" name="rePassword" placeholder="RePassword" required/>
                            </div>
                            <div className="form-input">
                                <span><i className="fa fa-phone"></i></span>
                                <input type="text" name="number" placeholder="Number Your Phone" required />
                            </div>
                            <div className="mb-3">
                                <button tabindex="submit" className="btn btn-block text-uppercase">Register</button>
                            </div>
    
                            <div className="text-center my-3">
                                or register by
                            </div>
                            <div className="row mb-3">
                                <div className="col-4">
                                    <a href="#" className="btn btn-block btn-social btn-facebook">facebook</a>
                                </div>
                                <div className="col-4">
                                    <a href="#" className="btn btn-block btn-social btn-google">google</a>
                                </div>
                                <div className="col-4">
                                    <a href="#" className="btn btn-block btn-social btn-twitter">twitter</a>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="text-center mb-2">
                                Do have an account?
                                <a href="sign-in.html" className="register-link">Login here</a>
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

export default Signup;