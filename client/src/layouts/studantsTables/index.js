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
import axios from "axios";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "../../examples/Tables/DataTable";
// import { styled } from "@mui/material/styles";

// Data
import studantsTableData from "./data/studantsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  const [inputValues, setInputValues] = React.useState({
    students: [],
  });
  const { students } = inputValues;
  const { columns, rows } = studantsTableData(students);

  React.useEffect(() => {
    axios
      .get("https://center-education.onrender.com/api/users/Students") // need to be dynamic
      .then((res) => {
        setInputValues({ ...inputValues, students: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
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
                Studant Table
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
      </Grid>
    </MDBox>
  );
}

export default Tables;
