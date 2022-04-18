import * as React from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import backgroundImage from "assets/images/bg-profile.jpeg";

import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Navbar from "components/NavHome";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import axios from "axios";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function ProfileStudent() {
  //   const a = [];
  //   props.forEach((e) => {
  //     a.push({
  //       Name: e.title,
  //     });
  //   });
  //   const { title } = props;

  const obj = {
    Name: "Mohammed",
    Mobile: "0592369124",
    Email: "mohammed@gmail.com",
    Locaion: "Gaza",
  };
  const arrKeys = [];
  const arrValues = [];

  Object.keys(obj).forEach((el) => arrKeys.push(el));
  Object.values(obj).forEach((el) => arrValues.push(el));

  const renderItems = arrKeys.map((label, key) => (
    <Box display="flex" py={1} pr={2}>
      <Typography variant="h7" fontWeight="bold">
        {label}: &nbsp;
      </Typography>
      <Typography variant="h7" fontWeight="regular">
        &nbsp;{arrValues[key]}
      </Typography>
    </Box>
  ));

  const renderProfiles = (
    <Box component="li" display="flex" alignItems="center" py={1} mb={1}>
      <Box mr={2}>
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
          alt="profile-image"
          size="xl"
          shadow="md"
        />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <Typography variant="button" fontWeight="medium">
          Java
        </Typography>
        <Typography variant="caption" color="text">
          Hi! I need more information..
        </Typography>
      </Box>
      <Box ml="auto">
        <Button component={Link} to="/course" variant="text" color="info">
          Show
        </Button>
      </Box>
    </Box>
  );
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const [inputValues, setInputValues] = React.useState({
  //     students: [],
  //   });
  //   const { student } = inputValues;
  //   React.useEffect(() => {
  //     axios
  //       .get("/api/users/Students") // need to be dynamic
  //       .then((response) => {
  //         setInputValues({ ...inputValues, student: response.data });
  //         // axios.get("/api/users/Profile/z@gmail.com"); // need to be dynamic
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Box sx={{ mt: 8 }}>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            minHeight="18.75rem"
            borderRadius="xl"
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              overflow: "hidden",
            }}
          />
          <Card
            sx={{
              position: "relative",
              mt: -8,
              mx: 3,
              py: 2,
              px: 2,
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
                  alt="profile-image"
                  size="xl"
                  shadow="md"
                />
              </Grid>
              <Grid item>
                <Box height="100%" mt={0.5} lineHeight={1}>
                  {/* {student[1].name} */}
                  mm
                  {/* {student.map((s) => (
                    <Typography key={s.id} variant="h5" fontWeight="medium">
                      {s.name}
                    </Typography>
                  ))} */}
                  <Typography variant="button" color="text" fontWeight="regular">
                    prof / Computer Programming
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8} xl={8}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <Typography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Profile Information
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    <Tooltip placement="top">
                      {/* <Button variant="contained" fullWidth onClick={handleClickOpen}>
                      </Button> */}
                      <Icon onClick={handleClickOpen}>edit</Icon>
                    </Tooltip>
                    {/* edit */}
                  </Typography>
                </Box>
                <Box p={2}>
                  <Box mb={2} lineHeight={1.5}>
                    <Typography variant="p" color="text" fontWeight="light">
                      Hi, I’m ahmed, Decisions: If you can’t decide, the answer is no. If two
                      equally difficult paths, choose the one more painful in the short term.
                    </Typography>
                  </Box>
                  <Box>{renderItems}</Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} xl={8}>
                <Card sx={{ height: "100%" }}>
                  <Box pt={2} px={2}>
                    <Typography variant="h6" fontWeight="medium" textTransform="capitalize">
                      My Courses
                    </Typography>
                  </Box>
                  <Box p={2}>
                    <Box component="ul" display="flex" flexDirection="column" p={0} m={0}>
                      {renderProfiles}
                    </Box>
                    <Box component="ul" display="flex" flexDirection="column" p={0} m={0}>
                      {renderProfiles}
                    </Box>
                    <Box component="ul" display="flex" flexDirection="column" p={0} m={0}>
                      {renderProfiles}
                    </Box>
                    <Box component="ul" display="flex" flexDirection="column" p={0} m={0}>
                      {renderProfiles}
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Card>
          <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
            <Grid>
              <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" pb={3}>
                    Upadte Data
                  </Typography>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={12} item>
                        <TextField
                          placeholder="Enter full name"
                          name="fullName"
                          label="Full Name"
                          variant="outlined"
                          //   value={firstName}
                          //   onChange={handleOnChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          //   value={email}
                          //   onChange={handleOnChange}
                          label="Email"
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
                          //   value={phoneNumber}
                          //   onChange={handleOnChange}
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="location"
                          placeholder="Enter your location"
                          name="location"
                          //   value={password}
                          //   onChange={handleOnChange}
                          label="Location"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="success" fullWidth>
                          Upadte
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" color="warning" fullWidth onClick={handleClose}>
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Dialog>
        </Box>
      </main>
    </ThemeProvider>
  );
}
