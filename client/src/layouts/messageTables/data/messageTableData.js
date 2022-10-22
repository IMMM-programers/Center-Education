/* eslint-disable react/prop-types */

import * as React from "react";

// Soft UI Dashboard React components
import axios from "axios";
import swal from "sweetalert";
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
// import MDButton from "components/MDButton";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
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
  const deleteMessage = (email) => {
    axios
      .delete(`/api/messages/deleteMessage/${email}`)
      .then(() => {
        swal("Good job!", "The Message deleted successfully", "success").then(() => {
          window.location.reload();
        });
      })
      .catch(() => {
        swal("OoOps!", "Error in deleting the Ad", "error");
      });
  };

  const a = [];
  props.forEach((e) => {
    a.push({
      Name: (
        <MDBox lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {e.userName}
          </MDTypography>
        </MDBox>
      ),
      Email: (
        <MDBox>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {e.email}
          </MDTypography>
          {/* <Image
            visibility={inputValues.visibility}
            picture={inputValues.image}
            title={inputValues.title}
          />
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Ad Details</DialogTitle>
            <DialogContent>
              <Image />
            </DialogContent>
            <DialogActions>
              <MDButton
                onClick={handleClose}
                style={{ backgroundColor: "#F53E36", color: "white" }}
              >
                Cancel
              </MDButton>
            </DialogActions>
          </Dialog> */}
        </MDBox>
      ),
      Phone_Number: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          // style={{ color: "#F53E36" }}
          // onClick={() => deleteAds(ind)}
        >
          {e.phoneNumber}
        </MDTypography>
      ),
      Message: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          // style={{ color: "#F53E36" }}
          // onClick={() => deleteAds(ind)}
        >
          {e.messageContent}
        </MDTypography>
      ),
      Action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          // style={{ color: "#F53E36" }}
          onClick={() => deleteMessage(e.email)}
        >
          delete
        </MDTypography>
      ),
    });
  });

  return {
    columns: [
      { Header: "User Name", accessor: "Name", width: "20%", align: "left" },
      { Header: "Email", accessor: "Email", align: "left", width: "23%" },
      { Header: "Phone Number", accessor: "Phone_Number", width: "23%", align: "left" },
      { Header: "Message", accessor: "Message", width: "18%", align: "left" },
      { Header: "Action", accessor: "Action", width: "23%", align: "left" },
    ],

    rows: a,
  };
}
