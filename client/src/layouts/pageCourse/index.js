import * as React from "react";
import Navbar from "components/NavHome";
import Video from "components/videoCourse";
import FooterHome from "components/FooterHome";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Avatar from "@mui/material/Avatar";
// import Divider from "@mui/material/Divider";
import GradeIcon from "@mui/icons-material/Grade";
import CheckIcon from "@mui/icons-material/Check";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";

// import backgroundImage from "assets/images/bg-profile.jpeg";
import { useLocation } from "react-router-dom";

const theme = createTheme();

export default function PageCourse() {
  const location = useLocation();
  const c = location.state;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Box sx={{ backgroundColor: "#3152a3", py: 6, px: 12, mt: 8 }}>
          <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
            <Grid item xs={8}>
              <Typography
                component="h2"
                variant="h4"
                color="#ffffff"
                sx={{ fontWeight: 500, fontSize: 28, mb: 2 }}
              >
                Course Name: {c.title}
              </Typography>
              <Typography
                variant="p"
                component="p"
                color="orange"
                sx={{ fontSize: 16, fontWeight: 500, mb: 2 }}
              >
                Category Course: {c.categoryName}
              </Typography>
              <Typography component="p" variant="p" color="lightgray" width="80%" sx={{ mb: 2 }}>
                {c.description}
              </Typography>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                <Grid item xs={2.5}>
                  <Box sx={{ color: "white" }}>
                    4.5
                    <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
                    <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
                    <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
                    <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
                    <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="p" component="p" color="#ffffff" sx={{ fontSize: 14 }}>
                    42,000 Students
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                <Grid item xs={1.4}>
                  <Typography variant="p" component="p" color="#ffffff" sx={{ fontSize: 14 }}>
                    Created by:
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    color="lightgreen"
                    sx={{ fontSize: 16, fontWeight: 500 }}
                  >
                    {c.teacherEmail.split("@")[0]}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: -36, mb: 10 }}>
          <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
            <Grid item xs={12} sx={{ ml: "70%" }}>
              <Card sx={{ maxWidth: 340 }}>
                <CardMedia>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMxqFiYQ4S-GGwI1EywQeRRy6dJ0AO4KJcw&usqp=CAU"
                    alt="{item.title}"
                    loading="lazy"
                    width="100%"
                    height="200"
                  />
                </CardMedia>
                <CardContent>
                  <Box sx={{}}>
                    <Typography
                      component="h4"
                      variant="h5"
                      sx={{ mt: 2, fontWeight: 500, textDecorationStyle: "dotted" }}
                    >
                      $95
                    </Typography>
                    <Typography component="p" variant="p" width="60%" sx={{ mt: 1 }}>
                      Last updated 3/2020
                    </Typography>
                    <Button
                      href="/SignUp"
                      variant="contained"
                      size="large"
                      align="center"
                      sx={{ mt: 2, color: "#ffffff", width: "100%", fontSize: 18 }}
                    >
                      Register
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{ mt: -15, mb: 6, mx: 12, px: 5, py: 2, border: 1, borderColor: "#3152a3" }}
          width="58%"
        >
          <Typography component="h4" variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
            What youll learn
          </Typography>
          <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
            <Grid item xs={6}>
              <Box width="90%">
                <Typography component="p" variant="p" sx={{ mt: 2 }}>
                  <CheckIcon sx={{ mr: 1, fontSize: 18 }} />
                  Learn the core Java skills needed to apply for Java developer positions in just 14
                  hours.
                </Typography>
                <Typography component="p" variant="p" sx={{ mt: 2 }}>
                  <CheckIcon sx={{ mr: 1, fontSize: 18 }} />
                  Be able to demonstrate your understanding of Java to future employers.
                </Typography>
                <Typography component="p" variant="p" sx={{ mt: 2 }}>
                  <CheckIcon sx={{ mr: 1, fontSize: 18 }} />
                  Acquire essential java basics for transitioning to the Spring Framework, Java EE,
                  Android development and more.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box width="90%">
                <Typography component="p" variant="p" sx={{ mt: 2 }}>
                  <CheckIcon sx={{ mr: 1, fontSize: 18 }} />
                  Be able to sit for and pass the Oracle Java Certificate exam if you choose.
                </Typography>
                <Typography component="p" variant="p" sx={{ mt: 2 }}>
                  <CheckIcon sx={{ mr: 1, fontSize: 18 }} />
                  Learn industry best practices in Java software development from a professional
                  Java developer who has worked in the language for 18 years.
                </Typography>
                <Typography component="p" variant="p" sx={{ mt: 2 }}>
                  <CheckIcon sx={{ mr: 1, fontSize: 18 }} />
                  Obtain proficiency in Java 8 and Java 11.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4, mx: 12 }} width="58%">
          <Typography component="h4" variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
            Requirements
          </Typography>
          <List dense sx={{ width: "100%" }}>
            <ListItem disablePadding>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ fontSize: 16, color: "black" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography component="p" variant="p" sx={{}}>
                  A computer with either Windows, Mac or Linux to install all the free software and
                  tools needed to build your new apps (I provide specific videos on installations
                  for each platform).
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ fontSize: 16, color: "black" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography component="p" variant="p" sx={{}}>
                  A strong work ethic, willingness to learn, and plenty of excitement about the
                  awesome new programs youre about to build.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <FiberManualRecordIcon sx={{ fontSize: 16, color: "black" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography component="p" variant="p" sx={{}}>
                  Nothing else! Its just you, your computer and your hunger to get started today.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 6, mx: 12 }} width="58%">
          <Typography component="h4" variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
            Description
          </Typography>
          <Typography component="p" variant="p" sx={{}}>
            Youve just stumbled upon the most complete, in-depth Java programming course online.
            With close to 600,000 students enrolled and over one hundred and forty thousand reviews
            (with tens of thousands of those 5-star) to date, these comprehensive java tutorials
            cover everything youll ever need. Whether you want to: - build the skills you need to
            get your first Java programming job - move to a more senior software developer position
            pass the oracle java certification exam - or just learn java to be able to create your
            own java apps quickly. ...this complete Java Masterclass is the course you need to do
            all of this, and more.
          </Typography>
        </Box>

        <Box sx={{ mb: 10, mx: 12 }}>
          <Typography
            component="h2"
            variant="h4"
            align="center"
            color="#3152a3"
            sx={{ fontWeight: 700 }}
          >
            Course Videos
          </Typography>
          <Video videos={c.videos} material={c.material} />
        </Box>
        {/* commited before */}
        {/* <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box> */}
        <FooterHome />
      </main>
    </ThemeProvider>
  );
}
