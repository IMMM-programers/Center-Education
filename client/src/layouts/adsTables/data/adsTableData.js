/* eslint-disable react/prop-types */

import * as React from "react";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
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

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// export default function data({props}) {
export default function data(props) {
  // const User = ({ name, email }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar
  //       src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
  //       name={name}
  //       size="sm"
  //     />
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>
  //       <MDTypography variant="caption">{email}</MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );

  // const deleteTeacher = (email) => {
  //   axios
  //     .delete(`/api/users/deleteUser/${email}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const a = [];
  props.forEach((e) => {
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
            onClick={handleClickOpen}
          >
            Show
          </MDTypography>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Ad Details</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <MDTypography component="h6" href="#" variant="h6" fontWeight="medium">
                  To subscribe to this website, please enter your email address here. We will send
                  updates occasionally.
                </MDTypography>
              </DialogContentText>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMxqFiYQ4S-GGwI1EywQeRRy6dJ0AO4KJcw&usqp=CAU"
                alt="{item.title}"
                loading="lazy"
                width="100%"
                height="100%"
                style={{ marginTop: "15px" }}
              />
            </DialogContent>
            <DialogActions>
              <MDButton
                onClick={handleClose}
                style={{ backgroundColor: "#F53E36", color: "white" }}
              >
                Cansel
              </MDButton>
            </DialogActions>
          </Dialog>
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
          // onClick={() => deleteTeacher(e.email)}
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
