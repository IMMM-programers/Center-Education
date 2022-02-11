/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Soft UI Context Provider
import { MaterialUIControllerProvider } from "context";
import Home from "layouts/home";
import Login from "components/login/login";
import SignUp from "components/signUp/signUp";
import LogOut from "layouts/authentication/sign-in";
import App from "App";
// import routes from "routes";

// const getRoutes = (allRoutes) =>
//   allRoutes.map((route) => {
//     if (route.collapse) {
//       return getRoutes(route.collapse);
//     }

//     if (route.route) {
//       return <Route path={route.route} element={route.component} key={route.key} />;
//     }

//     return null;
//   });

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/dashboard/*" element={<App />} />
        <Route path="/authentication/Log-out" element={<LogOut />} />
      </Routes>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
