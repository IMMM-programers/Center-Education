/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import * as React from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Icon from "@mui/material/Icon";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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

// export default function data({props}) {
export default function data(props) {
  const [inputValues, setInputValues] = React.useState({
    videoTitle: "",
    link: "",
    t: "",
    materialTitle: "",
    materialLink: "",
  });

  const { videoTitle, link, t, materialTitle, materialLink } = inputValues;
  console.log(t);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const deleteCourse = (title) => {
    axios
      .delete(`/api/courses/deleteCourse/${title}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addVideo = () => {
    const video = { videoTitle, link };
    axios
      .patch(`/api/courses/addVideo/${t}`, video)
      .then(() => {
        handleClose();
        setInputValues({ videoTitle: "", link: "", t: "" });
      })
      .catch(() => {
        handleClose();
      });
  };

  const addMaterial = () => {
    const material = { materialTitle, materialLink };
    axios
      .patch(`/api/courses/addMaterial/${t}`, material)
      .then(() => {
        handleClose();
        setInputValues({ materialTitle: "", materialLink: "", t: "" });
      })
      .catch(() => {
        handleClose();
      });
  };

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
                  <Button variant="contained" color="primary" fullWidth onClick={addVideo}>
                    Add
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth onClick={handleClose}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Dialog>
  );
  const dialogAddMaterial = (
    <Dialog open={open} onClose={handleClose}>
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
                    placeholder="Enter Material Title"
                    name="materialTitle"
                    label="Title"
                    variant="outlined"
                    value={materialTitle}
                    onChange={handleOnChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="link"
                    placeholder="Enter material link"
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
                  <Button variant="contained" color="primary" fullWidth onClick={addMaterial}>
                    Add
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth onClick={handleClose}>
                    Cancel
                  </Button>
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
          {dialogAddMaterial}
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
