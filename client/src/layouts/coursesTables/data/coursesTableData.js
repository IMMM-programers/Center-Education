/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import * as React from "react";

import Icon from "@mui/material/Icon";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import axios from "axios";
import swal from "sweetalert";

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

import { green, orange } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import MDTypography from "../../../components/MDTypography";
import MDBox from "../../../components/MDBox";

// export default function data({props}) {
export default function data(props) {
  const [inputValues, setInputValues] = React.useState({
    videoTitle: "",
    link: "",
    t: "",
    materialLink: "",
  });

  const { videoTitle, link, t, materialLink } = inputValues;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const deleteCourse = (title) => {
    axios
      .delete(`https://center-education.onrender.com/api/courses/deleteCourse/${title}`)
      .then((res) => {
        swal("Good job!", "The Course deleted successfully", "success").then(() => {
          window.location.reload();
        });
        console.log(res.data);
      })
      .catch((err) => {
        swal("OoOps!", "Error in deleting the Course", "error");
        console.log(err);
      });
  };

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const addVideo = () => {
    const video = { videoTitle, link };
    if (videoTitle === "" || link === "") {
      swal("OoOps!", " Please fill all the fields correctly.", "error").then(() => {
        window.location.reload();
      });
    } else {
      axios
        .patch(`https://center-education.onrender.com/api/courses/addVideo/${t}`, video)
        .then(() => {
          swal("Good job!", "The Video has been added successfully", "success").then(() => {
            window.location.reload();
          });
          handleClose();
          setInputValues({ videoTitle: "", link: "", t: "" });
        })
        .catch(() => {
          swal("OoOps!", " Please fill all the fields correctly.", "error");
          handleClose();
        });
    }
  };

  console.log(materialLink);
  const addMaterial = () => {
    const material = { materialLink };
    if (materialLink === "") {
      swal("OoOps!", " Please fill all the fields correctly.", "error").then(() => {
        window.location.reload();
      });
    } else {
      axios
        .patch(`https://center-education.onrender.com/api/courses/addMaterial/${t}`, material)
        .then(() => {
          swal("Good job!", "The Material has been added successfully", "success").then(() => {
            window.location.reload();
          });
          handleClose2();
          setInputValues({ material: "", t: "" });
        })
        .catch(() => {
          swal("OoOps!", " Please fill all the fields correctly.", "error");
          handleClose2();
        });
    }
  };

  const ColorButtonAdd = styled(Button)(() => ({
    color: "white",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));
  const ColorButtonCancel = styled(Button)(() => ({
    color: "white",
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  }));

  const dialogAddVideos = (
    <Dialog open={open} onClose={handleClose}>
      <Grid>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" pb={3}>
              Add Videos
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={12} item>
                  <TextField
                    placeholder="Enter Title"
                    name="videoTitle"
                    label="Title"
                    variant="outlined"
                    value={videoTitle}
                    onChange={handleOnChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="link"
                    placeholder="Enter video link"
                    name="link"
                    value={link}
                    onChange={handleOnChange}
                    label="Link"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <ColorButtonAdd variant="contained" fullWidth onClick={addVideo}>
                    Add
                  </ColorButtonAdd>
                </Grid>
                <Grid item xs={12}>
                  <ColorButtonCancel variant="contained" fullWidth onClick={handleClose}>
                    Cancel
                  </ColorButtonCancel>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Dialog>
  );

  const dialogAddMaterial = (
    <Dialog open={open2} onClose={handleClose2}>
      <Grid>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" pb={3}>
              Add Material
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={12} item>
                  <TextField
                    placeholder="Enter Material link"
                    name="materialLink"
                    label="material"
                    variant="outlined"
                    value={materialLink}
                    onChange={handleOnChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <ColorButtonAdd variant="contained" fullWidth onClick={addMaterial}>
                    Add
                  </ColorButtonAdd>
                </Grid>
                <Grid item xs={12}>
                  <ColorButtonCancel variant="contained" fullWidth onClick={handleClose2}>
                    Cancel
                  </ColorButtonCancel>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Dialog>
  );

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
      description: e.description,
      categoryName: (
        <MDBox lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {e.categoryName}
          </MDTypography>
        </MDBox>
      ),
      addMaterial: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon
            fontSize="small"
            onClick={() => {
              handleClickOpen2();
              setInputValues({ ...inputValues, t: e.title });
            }}
            color="primary"
          >
            add_circle
          </Icon>
          {dialogAddMaterial}
        </MDTypography>
      ),
      addVideo: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon
            fontSize="small"
            onClick={() => {
              handleClickOpen();
              setInputValues({ ...inputValues, t: e.title });
            }}
            color="primary"
          >
            add_circle
          </Icon>
          {dialogAddVideos}
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          onClick={() => deleteCourse(e.title)}
        >
          Delete
        </MDTypography>
      ),
    });
  });
  return {
    columns: [
      { Header: "title", accessor: "title", width: "18%", align: "left" },
      { Header: "description", accessor: "description", width: "28%", align: "left" },
      { Header: "category name", accessor: "categoryName", align: "center" },
      { Header: "Add Material", accessor: "addMaterial", align: "center" },
      { Header: "Add Video", accessor: "addVideo", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: a,
  };
}
