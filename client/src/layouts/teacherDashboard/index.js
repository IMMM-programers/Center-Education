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

// Material Dashboard 2 React components
import axios from "axios";
import MDBox from "../../components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
// import ReportsBarChart from "../../examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "../../examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/teacherDashboard/components/Projects";
import Projects from "../studantsTables";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function TeacherDashboard() {
  // const { sales, tasks } = reportsLineChartData;

  const [inputValues, setInputValues] = React.useState({
    courses: [],
    students: [],
  });

  const { courses, students } = inputValues;

  React.useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    axios
      .get("/api/auth/tokenUser", config)
      .then((response) => {
        axios
          .get(`/api/courses/teacherCourses/${response.data.email}`)
          .then((res) => {
            axios
              .get("/api/users/Students")
              .then((r) => {
                setInputValues({ ...inputValues, courses: res.data, students: r.data });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="menu_book"
                title="Courses"
                count={courses.length}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Currently available",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="school"
                title="Students"
                count={students.length} // number of stidents
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Currently registered",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={16}>
              <Projects />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default TeacherDashboard;
