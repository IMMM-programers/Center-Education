// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./sign-up.css";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLock, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
// import img1 from "../../img/img1.webp";

// class SignUp extends React.Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//   };

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const { name, email, password, phoneNumber } = this.state;
//     const type = "Student";
//     axios
//       .post("/api/users/createUser", { name, email, password, phoneNumber, type })
//       .then((response) => {
//         // localStorage.setItem("token", response.data.token);
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row px-3">
//           <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
//             <div className="img-left d-none d-md-flex justify-content-center align-items-center ">
//               <img src={img1} alt="" />
//             </div>
//             <div className="card-body">
//               <h4 className="title text-center mt-4">Create a new account</h4>
//               <form onSubmit={this.handleSubmit.bind(this)} className="form-box px-3">
//                 <div className="form-input">
//                   <span>
//                     <FontAwesomeIcon icon={faUser} />
//                   </span>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={this.state.name}
//                     onChange={this.handleChange.bind(this)}
//                   />
//                 </div>
//                 <div className="form-input">
//                   <span>
//                     <FontAwesomeIcon icon={faEnvelope} />
//                   </span>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     tabindex="10"
//                     value={this.state.email}
//                     onChange={this.handleChange.bind(this)}
//                   />
//                 </div>
//                 <div className="form-input">
//                   <span>
//                     <FontAwesomeIcon icon={faLock} />
//                   </span>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={this.state.password}
//                     onChange={this.handleChange.bind(this)}
//                   />
//                 </div>
//                 <div className="form-input">
//                   <span>
//                     <FontAwesomeIcon icon={faPhone} />
//                   </span>
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     placeholder="Number Your Phone"
//                     value={this.state.phoneNumber}
//                     onChange={this.handleChange.bind(this)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <button tabindex="submit" className="btn btn-block text-uppercase">
//                     Register
//                   </button>
//                 </div>

//                 <div className="text-center my-3">or register by</div>
//                 <div className="row mb-3">
//                   <div className="col-4">
//                     <a href="#" className="btn btn-block btn-social btn-facebook">
//                       facebook
//                     </a>
//                   </div>
//                   <div className="col-4">
//                     <a href="#" className="btn btn-block btn-social btn-google">
//                       google
//                     </a>
//                   </div>
//                   <div className="col-4">
//                     <a href="#" className="btn btn-block btn-social btn-twitter">
//                       twitter
//                     </a>
//                   </div>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="text-center mb-2">
//                   Do have an account?
//                   <a href="sign-in.html" className="register-link">
//                     Login here
//                   </a>
//                 </div>
//               </form>
//             </div>
//             <div className="img-right d-none d-md-flex "></div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignUp;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="fullname"
                label="Full Name"
                name="fullname"
                autoComplete="fullname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="ظ" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
