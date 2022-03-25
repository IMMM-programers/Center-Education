import * as React from "react";
import Navbar from "components/NavHome";
import Course from "components/VideoCourse";
import FooterHome from "components/FooterHome";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";

const theme = createTheme();

export default function PageCourse() {
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
            Videos
          </Typography>
          <Grid
            container
            align="center"
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            sx={{ py: 8, px: 8 }}
          >
            <Grid item xs={4}>
              <Course />
            </Grid>
            <Grid item xs={4}>
              <Course />
            </Grid>
            <Grid item xs={4}>
              <Course />
            </Grid>
            <Grid item xs={4}>
              <Course />
            </Grid>
            <Grid item xs={4}>
              <Course />
            </Grid>
            <Grid item xs={4}>
              <Course />
            </Grid>
          </Grid>
        </Box>

        <FooterHome />
      </main>
    </ThemeProvider>
  );
}
