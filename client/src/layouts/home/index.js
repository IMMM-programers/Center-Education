import * as React from "react";
import NavbarHome from "components/NavHome";
import NavbarLogin from "components/NavLogin";
import Course from "components/PartCourse";
import ContactHome from "components/ContactHome";
import FeedbackStudent from "components/FeedbackStudent";
import FooterHome from "components/FooterHome";
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
import axios from "axios";

const theme = createTheme();

export default function Home() {
  const [inputValues, setInputValues] = React.useState({
    course: [],
    ads: [],
    user: null,
  });
  const { course, ads, user } = inputValues;
  React.useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    axios
      .get("/api/courses/allCourses")
      .then((response) => {
        axios
          .get("/api/users/Profile/m@gmail.com")
          .then((res) => {
            if (localStorage.getItem("token")) {
              axios
                .get("/api/auth/tokenUser", config)
                .then((re) => {
                  setInputValues({
                    ...inputValues,
                    ads: res.data.ads,
                    course: response.data,
                    user: re.data,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              setInputValues({
                ...inputValues,
                ads: res.data.ads,
                course: response.data,
              });
            }
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {user ? <NavbarLogin user={user} /> : <NavbarHome />}
      <main>
        <Box
          sx={{
            height: "750px",
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
            <Button href="/SignUp" variant="contained" size="large">
              Register
            </Button>
            <Button variant="outlined" size="large" startIcon={<PlayArrowIcon />}>
              Video
            </Button>
          </Stack>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            sx={{ py: 8, px: 12 }}
          >
            <Grid item xs={6}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMxqFiYQ4S-GGwI1EywQeRRy6dJ0AO4KJcw&usqp=CAU"
                alt="{item.title}"
                loading="lazy"
                width="100%"
              />
            </Grid>
            <Grid item xs={0.5}>
              {" "}
            </Grid>
            <Grid item xs={5}>
              <Typography
                component="h3"
                variant="h3"
                color="#2B3543"
                fontWeight={500}
                sx={{ mb: 3 }}
              >
                Large educational programs
              </Typography>
              <Typography variant="p" color="#647186 " paragraph sx={{ width: "530px" }}>
                Something short and leading about the collection below—its contents, the creator,
                etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over
                it entirely.
              </Typography>
              <Stack sx={{ pt: 2 }} direction="row">
                <Button href="/SignUp" variant="contained" size="large">
                  Register
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Courses */}
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
            sx={{ py: 8, px: 8 }}
          >
            {course.map((c) => (
              <Grid key={c.title} item xs={4}>
                {Course(c)}
              </Grid>
            ))}

            <Grid item xs={12}>
              <Stack sx={{}} direction="row" justifyContent="center" spacing={2}>
                <Button
                  href="/all-courses"
                  variant="outlined"
                  size="large"
                  sx={{ color: "#3152a3" }}
                >
                  Other Course
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Ads */}
        <Box sx={{ mt: 8, px: 12 }}>
          <Typography
            variant="h4"
            component="h5"
            sx={{ fontWeight: 600, mb: 8, color: "#3152a3" }}
            align="center"
          >
            Ads
          </Typography>
          <Grid container align="center" columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
            {ads.map((e) => (
              <Grid key={e.title} item xs={6}>
                <Box style={{ position: "relative" }}>
                  <img
                    src={e.imageUrl}
                    alt={e.title}
                    loading="lazy"
                    width="100%"
                    height="280px"
                    style={{ borderRadius: 20 }}
                  />
                  <Typography
                    component="h6"
                    variant="h7"
                    color="white"
                    fontWeight={500}
                    fontSize="14px"
                    width="50px"
                    sx={{ px: 1, py: 0.3 }}
                    style={{
                      position: "absolute",
                      top: "20%",
                      left: "8%",
                      backgroundColor: "#ed8505",
                      borderRadius: 20,
                    }}
                  >
                    New
                  </Typography>
                  {/* <Typography
                    component="h1"
                    variant="h5"
                    color="white"
                    fontWeight={500}
                    style={{ position: "absolute", top: "40%", left: "8%" }}
                  >
                    Large educational programs
                  </Typography> */}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Become A Instructor */}
        <Box
          sx={{ mx: 12, mt: 14, py: 4, px: 12, borderRadius: 6 }}
          bgcolor="#dbe5ea"
          height="230px"
        >
          <Grid
            container
            align="center"
            // rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
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
                height="180"
                style={{ transform: "rotate(-20deg)" }}
              />
            </Grid>
            <Grid item xs={3} sx={{ py: 8 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ width: "180px", height: "50px", fontSize: 16 }}
              >
                From Here
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* How It Work? */}
        <Box sx={{ px: 12, mt: 14 }}>
          <Typography variant="h4" component="h5" sx={{ fontWeight: 600, mb: 8 }} align="center">
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

        <FeedbackStudent />

        <ContactHome id="contact" />

        <FooterHome />
      </main>
    </ThemeProvider>
  );
}
