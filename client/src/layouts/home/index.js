import * as React from "react";
import Navbar from "components/NavHome";
import Course from "components/PartCourse";
import ContactHome from "components/ContactHome";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import GradeIcon from "@mui/icons-material/Grade";
import Avatar from "@mui/material/Avatar";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { green } from "@mui/material/colors";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        {/* <Box
          sx={{
            pt: 12,
            pl: 12,
            pb: 7,
            mt: 8,
            width: "100%",
            backgroundColor: "#dbe5ea",
          }}
        >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} marginRight="20">
              <Typography
                component="h1"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom
                fontWeight={700}
              >
                Album layout
              </Typography>
              <Typography variant="h5" align="left" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents, the creator,
                etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over
                it entirely.
              </Typography>
              <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="left">
                <Button variant="contained">Register</Button>
                <Button variant="outlined" startIcon={<PlayArrowIcon />}>
                  Video
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={4} sx={{ ml: 15 }}>
              <img
                src="https://image.freepik.com/free-photo/e-learning-concept-person-is-using-laptop-computer-learn_27634-790.jpg?w=900"
                alt="{item.title}"
                loading="lazy"
                width="400"
                height="400"
              />
            </Grid>
          </Grid>
        </Box> */}
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(https://image.freepik.com/free-photo/person-holding-light-bulb-with-graduation-cap_23-2148721299.jpg?w=900)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            py: 20,
            px: 12,
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            align="left"
            color="white"
            gutterBottom
            fontWeight={700}
          >
            Large educational programs
          </Typography>
          <Typography variant="p" align="left" color="white" paragraph>
            Our course is rated excellent by over 42,000 people
            <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
            <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
            <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
            <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
            <GradeIcon sx={{ ml: 1, fontSize: 16, color: "orange" }} />
          </Typography>
          <Typography variant="p" align="left" color="white" paragraph sx={{ width: 600 }}>
            Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
            entirely.
          </Typography>
          <Stack sx={{ pt: 4 }} direction="row" spacing={2}>
            <Button variant="contained" size="large">
              Register
            </Button>
            <Button variant="outlined" size="large" startIcon={<PlayArrowIcon />}>
              Video
            </Button>
          </Stack>
        </Box>

        <Box>
          <Grid
            container
            align="center"
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            sx={{ py: 8, px: 5, mt: 6 }}
            height="550px"
          >
            <Grid item xs={6}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMxqFiYQ4S-GGwI1EywQeRRy6dJ0AO4KJcw&usqp=CAU"
                alt="{item.title}"
                loading="lazy"
                width="90%"
                height="100%"
              />
            </Grid>
            <Grid item xs={5}>
              <Typography
                component="h3"
                variant="h3"
                align="left"
                color="#2B3543"
                gutterBottom
                fontWeight={500}
              >
                Large educational programs
              </Typography>
              <Typography variant="p" align="left" color="#647186 " paragraph sx={{ width: 600 }}>
                Something short and leading about the collection below—its contents, the creator,
                etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over
                it entirely.
              </Typography>
              <Stack sx={{ pt: 2 }} direction="row">
                <Button variant="contained" size="large">
                  Register
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography
            component="h2"
            variant="h4"
            align="center"
            color="#3152a3"
            sx={{ fontWeight: 700 }}
          >
            Courses
          </Typography>
          <Grid
            container
            align="center"
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            sx={{ p: 8 }}
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
            <Grid item xs={12}>
              <Stack sx={{}} direction="row" justifyContent="center" spacing={2}>
                <Button variant="outlined" size="large" sx={{ color: "#3152a3" }}>
                  Other Course
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ m: 8, borderRadius: 6 }} bgcolor="#dbe5ea">
          <Grid
            container
            align="center"
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            sx={{ py: 3, px: 6 }}
          >
            <Grid item xs={5}>
              <Typography
                component="h1"
                variant="h5"
                align="left"
                color="#3152a3"
                sx={{ mb: 3 }}
                fontWeight={700}
              >
                Become A Instructor
              </Typography>
              <Typography
                component="h1"
                variant="h4"
                align="left"
                color="black"
                gutterBottom
                fontWeight={500}
              >
                You can join with Edule as a instructor?
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img
                src="http://www.downloadclipart.net/large/curved-arrow-png-transparent-hd-photo.png"
                alt="{item.title}"
                loading="lazy"
                width="80%"
                height="200"
                style={{ transform: "rotate(-40deg)" }}
              />
            </Grid>
            <Grid item xs={3}>
              <Stack sx={{}} direction="row" justifyContent="center" spacing={2}>
                <Button variant="contained" size="large">
                  Other Course
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ py: 3, px: 13, mb: 10 }}>
          <Typography variant="h4" component="h5" sx={{ fontWeight: 600, mb: 4 }} align="center">
            How It <span style={{ color: "#172e88" }}>Work?</span>
          </Typography>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#f0f1f9" }}>
                <CardMedia sx={{ pl: 2, pt: 3 }}>
                  <Avatar sx={{ bgcolor: green[500], width: 50, height: 50 }} variant="rounded">
                    <ContentPasteSearchIcon sx={{ fontSize: 30 }} />
                  </Avatar>
                </CardMedia>
                <CardContent align="left">
                  <Typography
                    variant="h6"
                    component="h5"
                    color="#3152a3"
                    sx={{ fontSize: 20, mt: 1 }}
                  >
                    Find Your Course
                  </Typography>
                  <Typography variant="p" component="p" sx={{ fontSize: 16, mt: 1 }}>
                    It has survived not only centurie also leap into electronic.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={1.5} align="center" sx={{ py: 10 }}>
              <img
                src="http://www.downloadclipart.net/large/curved-arrow-png-transparent-hd-photo.png"
                alt="{item.title}"
                loading="lazy"
                width="80px"
                height="60px"
              />
            </Grid>
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#f0f1f9" }}>
                <CardMedia sx={{ pl: 2, pt: 3 }}>
                  <Avatar sx={{ bgcolor: green[500], width: 50, height: 50 }} variant="rounded">
                    <AssignmentIcon sx={{ fontSize: 30 }} />
                  </Avatar>
                </CardMedia>
                <CardContent align="left">
                  <Typography
                    variant="h6"
                    component="h5"
                    color="#3152a3"
                    sx={{ fontSize: 20, mt: 1 }}
                  >
                    Book A Seat
                  </Typography>
                  <Typography variant="p" component="p" sx={{ fontSize: 16, mt: 1 }}>
                    It has survived not only centurie also leap into electronic.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={1.5} align="center" sx={{ pt: 10 }}>
              <img
                src="http://www.downloadclipart.net/large/curved-arrow-png-transparent-hd-photo.png"
                alt="{item.title}"
                loading="lazy"
                width="80px"
                height="60px"
              />
            </Grid>
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#f0f1f9" }}>
                <CardMedia sx={{ pl: 2, pt: 3 }}>
                  <Avatar sx={{ bgcolor: green[500], width: 50, height: 50 }} variant="rounded">
                    <CardMembershipIcon sx={{ fontSize: 30 }} />
                  </Avatar>
                </CardMedia>
                <CardContent align="left">
                  <Typography
                    variant="h6"
                    component="h5"
                    color="#3152a3"
                    sx={{ fontSize: 20, mt: 1 }}
                  >
                    Get Certificate
                  </Typography>
                  <Typography variant="p" component="p" sx={{ fontSize: 16, mt: 1 }}>
                    It has survived not only centurie also leap into electronic.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <ContactHome />

        <footer>
          <Box bgcolor="#172e88" color="white">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
              sx={{ px: 12, py: 6 }}
            >
              <Grid item xs={3}>
                <Box>
                  <Typography variant="h6" color="white">
                    About us
                  </Typography>
                  <Typography
                    variant="p"
                    align="left"
                    color="white"
                    paragraph
                    sx={{ mt: 1, fontSize: 14 }}
                  >
                    Something short and leading about the collection below—its contents, the
                    creator, etc.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ pl: 6 }}>
                  <Typography variant="h6" color="white">
                    Company
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography
                      variant="a"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Privacy Policy
                    </Typography>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Term & Condition
                    </Typography>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Latest Blogs
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ pl: 6 }}>
                  <Typography variant="h6" color="white">
                    Quick Links
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Home
                    </Typography>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Courses
                    </Typography>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Contatc
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ pl: 6 }}>
                  <Typography variant="h6" color="white">
                    Social Pages
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Facebook
                    </Typography>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Twitter
                    </Typography>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ mb: 1, fontSize: 14 }}
                    >
                      Instagram
                    </Typography>
                    <Typography
                      variant="p"
                      align="left"
                      color="white"
                      paragraph
                      sx={{ fontSize: 14 }}
                    >
                      Linkedin
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </footer>
      </main>
    </ThemeProvider>
  );
}
