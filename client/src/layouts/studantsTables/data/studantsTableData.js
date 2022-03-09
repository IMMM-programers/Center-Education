/* eslint-disable react/prop-types */

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
  // const deleteAds = (i) => {
  //   axios
  //     .delete(`/api/users/deleteAds/${i}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const a = [];
  props.forEach(() => {
    a.push({
      // Name: (
      //   <MDBox lineHeight={1}>
      //     <MDTypography display="block" variant="button" fontWeight="medium">
      //       {(e.userName, ind)}
      //     </MDTypography>
      //   </MDBox>
      // ),
      // Email: (
      //   <MDBox>
      //     <MDTypography
      //       component="a"
      //       href="#"
      //       variant="caption"
      //       color="text"
      //       fontWeight="medium"
      //       style={{ color: "#328CED" }}
      //     >
      //       Show
      //     </MDTypography>
      //     <Image
      //       visibility={inputValues.visibility}
      //       picture={inputValues.image}
      //       title={inputValues.title}
      //     />
      //     {/* <Dialog open={open} onClose={handleClose}>
      //       <DialogTitle>Ad Details</DialogTitle>
      //       <DialogContent>
      //         <Image />
      //       </DialogContent>
      //       <DialogActions>
      //         <MDButton
      //           onClick={handleClose}
      //           style={{ backgroundColor: "#F53E36", color: "white" }}
      //         >
      //           Cancel
      //         </MDButton>
      //       </DialogActions>
      //     </Dialog> */}
      //   </MDBox>
      // ),
      // Phone_Number: (
      //   <MDTypography
      //     component="a"
      //     href="#"
      //     variant="caption"
      //     color="text"
      //     fontWeight="medium"
      //     style={{ color: "#F53E36" }}
      //     onClick={() => deleteAds(ind)}
      //   >
      //     Delete
      //   </MDTypography>
      // ),
      // Message: (
      //   <MDTypography
      //     component="a"
      //     href="#"
      //     variant="caption"
      //     color="text"
      //     fontWeight="medium"
      //     style={{ color: "#F53E36" }}
      //     onClick={() => deleteAds(ind)}
      //   >
      //     Delete
      //   </MDTypography>
      // ),
      // Action: (
      //   <MDTypography
      //     component="a"
      //     href="#"
      //     variant="caption"
      //     color="text"
      //     fontWeight="medium"
      //     style={{ color: "#F53E36" }}
      //     onClick={() => deleteAds(ind)}
      //   >
      //     Delete
      //   </MDTypography>
      // ),
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
