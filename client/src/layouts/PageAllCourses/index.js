import * as React from "react";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import FooterHome from "../../components/FooterHome";
import Course from "../../components/PartCourse";
import Navbar from "../../components/NavHome";

const theme = createTheme();

export default function PageCourse() {
  const [inputValues, setInputValues] = React.useState({
    course: [],
  });
  const { course } = inputValues;

  React.useEffect(() => {
    axios
      .get("/api/courses/allCourses") // need to be dynamic
      .then((response) => {
        setInputValues({ ...inputValues, course: response.data });
        axios.get("/api/users/Profile/m@gmail.com"); // need to be dynamic
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Box
          sx={{
            py: 20,
            px: 12,
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            align="center"
            color="#3152a3"
            sx={{ fontWeight: 700 }}
          >
            All Courses
          </Typography>
          <Grid
            container
            align="center"
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            sx={{ py: 8, px: 8 }}
          >
            {course.map((c) => (
              <Grid key={c.title} item xs={4}>
                {Course(c)}
              </Grid>
            ))}
          </Grid>
        </Box>

        <FooterHome />
      </main>
    </ThemeProvider>
  );
}
