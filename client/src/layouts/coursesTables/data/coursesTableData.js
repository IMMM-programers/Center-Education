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

  const dialog = (
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
                    name="title"
                    label="Title"
                    variant="outlined"
                    //   value={firstName}
                    //   onChange={handleOnChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="link"
                    placeholder="Enter video link"
                    name="link"
                    //   value={password}
                    //   onChange={handleOnChange}
                    label="Link"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth>
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
      edit: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <Icon fontSize="small" onClick={handleClickOpen} color="primary">
            add_circle
          </Icon>
          {dialog}
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
      { Header: "title", accessor: "title", width: "20%", align: "left" },
      { Header: "description", accessor: "description", width: "30%", align: "left" },
      { Header: "category name", accessor: "categoryName", align: "center" },
      { Header: "edit", accessor: "edit", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: a,
  };
}
