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
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import swal from "sweetalert";
import { useMaterialUIController } from "../../context";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import DataTable from "../../examples/Tables/DataTable";
// import { styled } from "@mui/material/styles";

// Data
import teachersTableData from "./data/teachersTableData";
import MDButton from "../../components/MDButton";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// Dialog Teacher

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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    teachers: [],
  });
  const { columns, rows } = teachersTableData(inputValues.teachers);

  const { firstName, lastName, email, password, phoneNumber } = inputValues;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const addTeacher = () => {
    const t = { name: `${firstName} ${lastName}`, email, password, phoneNumber, type: "Teacher" };
    axios
      .post("https://center-education.onrender.com/api/users/createUser", t)
      .then(() => {
        swal("Good job!", "The teacher has been added successfully", "success").then(() => {
          window.location.reload();
        });
        handleClose();
      })
      .catch(() => {
        swal("OoOps!", " Please fill all the fields correctly.", "error");
        handleClose();
      });
  };

  React.useEffect(() => {
    axios
      .get("https://center-education.onrender.com/api/users/Teachers")
      .then((res) => {
        setInputValues({ ...inputValues, teachers: res.data });
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
                  Teachers Table
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
          Add New Teacher
        </MDButton>
        {/* Popup code */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" pb={3}>
                  Add Teacher
                </Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Enter first name"
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        onChange={handleOnChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Enter last name"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        label="Password"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        placeholder="Enter phone number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleOnChange}
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MDButton variant="contained" color="success" fullWidth onClick={addTeacher}>
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
