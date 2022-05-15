/* eslint-disable react/prop-types */

import * as React from "react";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
import axios from "axios";

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

import Image from "components/ShowImage";
import swal from "sweetalert";

export default function data(props) {
  const [inputValues, setInputValues] = React.useState({
    title: "",
    image: "",
    visibility: "hidden",
  });

  const deleteAds = (i) => {
    axios
      .delete(`/api/users/deleteAds/${i}`)
      .then(() => {
        swal("Good job!", "The Ad deleted successfully", "success").then(() => {
          window.location.reload();
        });
      })
      .catch(() => {
        swal("OoOps!", "Error in deleting the Ad", "error");
      });
  };

  const a = [];
  props.forEach((e, ind) => {
    a.push({
      title: (
        <MDBox lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {e.title}
          </MDTypography>
        </MDBox>
      ),
      image: (
        <MDBox>
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
            style={{ color: "#328CED" }}
            onClick={() =>
              setInputValues({
                ...inputValues,
                visibility: "visible",
                title: e.title,
                image: e.imageUrl,
              })
            }
          >
            Show
          </MDTypography>
          <Image
            visibility={inputValues.visibility}
            picture={inputValues.image}
            title={inputValues.title}
          />
          {/* <Dialog open={open} onClose={handleClose}>
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
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          style={{ color: "#F53E36" }}
          onClick={() => deleteAds(ind)}
        >
          Delete
        </MDTypography>
      ),
    });
  });
  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "title", accessor: "title", width: "50%", align: "left" },
      { Header: "image", accessor: "image", align: "left", width: "23%" },
      { Header: "action", accessor: "action", width: "23%", align: "left" },
    ],

    rows: a,
  };
}
