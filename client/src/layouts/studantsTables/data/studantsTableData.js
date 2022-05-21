/* eslint-disable react/prop-types */

// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// import * as React from "react";

// Soft UI Dashboard React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
// import axios from "axios";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

export default function data(props) {
  const a = [];
  props.forEach((e) => {
    a.push({
      Name: e.name,
      Email: e.email,
      Phone_Number: e.phoneNumber,
      Course: e.coursesReg.length,
    });
  });

  return {
    columns: [
      { Header: "Studant Name", accessor: "Name", width: "20%", align: "left" },
      { Header: "Email", accessor: "Email", align: "left", width: "23%" },
      { Header: "Phone Number", accessor: "Phone_Number", width: "23%", align: "left" },
      { Header: "Course", accessor: "Course", width: "18%", align: "left" },
    ],

    rows: a,
  };
}
