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

import * as React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
// import { styled } from "@mui/material/styles";

// Data
import adsTableData from "layouts/adsTables/data/adsTableData";
import MDButton from "components/MDButton";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import { useMaterialUIController } from "context";

// Dialog Teacher
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import axios from "axios";

function Tables() {
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [inputValues, setInputValues] = React.useState({
    title: "",
    imageUrl: "",
    ads: [],
  });
  const { title, imageUrl, ads } = inputValues;
  const { columns, rows } = adsTableData(ads);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const addAd = () => {
    const ad = { title, imageUrl };
    axios
      .patch(`/api/users/addAds/m@gmail.com`, ad) // need to be dynamic
      .then(() => {
        handleClose();
      })
      .catch(() => {
        handleClose();
      });
  };

  React.useEffect(() => {
    axios
      .get("/api/users/Profile/m@gmail.com") // need to be dynamic
      .then((res) => {
        setInputValues({ ...inputValues, ads: res.data.ads });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Ads Table
                </MDTypography>
              </MDBox>

              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <MDBox p={2} mt="auto">
        <MDButton
          // component="a"
          href="" // add new teacher
          rel="noreferrer"
          variant="gradient"
          color={sidenavColor}
          onClick={handleClickOpen}
        >
          Add New Ad
        </MDButton>
        {/* Popup code */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" pb={3}>
                  Add Ad
                </Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid item xs={12} mb={2}>
                      <TextField
                        type="text"
                        placeholder="Enter Title"
                        name="title"
                        value={title}
                        onChange={handleOnChange}
                        label="Titel"
                        variant="outlined"
                        fullWidth
                        // sx={{ mt: 3 }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} mb={2}>
                      <TextField
                        type="text"
                        placeholder="Enter Image URL"
                        name="imageUrl"
                        value={imageUrl}
                        onChange={handleOnChange}
                        label="Image URL"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} mb={1}>
                      <MDButton variant="contained" color="success" fullWidth onClick={addAd}>
                        Submit
                      </MDButton>
                    </Grid>
                    <Grid item xs={12}>
                      <MDButton variant="contained" color="warning" fullWidth onClick={handleClose}>
                        Cancel
                      </MDButton>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Dialog>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
