import * as React from "react";

// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import NearMeIcon from "@mui/icons-material/NearMe";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Button from "@mui/material/Button";

export default function PartCourse() {
  return (
    <Box sx={{ py: 10, px: 12, mt: 14 }} bgcolor="#f0f1f9">
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4" sx={{ fontWeight: 600, mb: 8 }}>
            Contact <span style={{ color: "#172e88" }}>Us</span>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="h5" sx={{ fontWeight: 600, mb: 3 }}>
            For Any Querues and Support
          </Typography>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }} sx={{ mb: 5 }}>
            <Grid item xs={2} justifyContent="center" sx={{ py: 0.5 }}>
              <Avatar
                sx={{
                  width: 45,
                  height: 45,
                  backgroundColor: "transparent",
                  color: "#172e88",
                  border: 1,
                }}
                variant="circular"
              >
                <NearMeIcon sx={{ fontSize: 28 }} />
              </Avatar>
            </Grid>
            <Grid item xs={10} sx={{}}>
              <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: "#3152a3" }}>
                Company Location
              </Typography>
              <Typography variant="p" component="p" sx={{ fontSize: 16, color: "#7a7a7a" }}>
                199 xyz gali, New Delhi
              </Typography>
            </Grid>
          </Grid>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }} sx={{ mb: 5 }}>
            <Grid item xs={2} justifyContent="center" sx={{ py: 0.5 }}>
              <Avatar
                sx={{
                  width: 45,
                  height: 45,
                  backgroundColor: "transparent",
                  color: "#172e88",
                  border: 1,
                }}
                variant="circular"
              >
                <EmailIcon sx={{ fontSize: 28 }} />
              </Avatar>
            </Grid>
            <Grid item xs={10} sx={{}}>
              <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: "#3152a3" }}>
                Write to us at
              </Typography>
              <Typography variant="p" component="p" sx={{ fontSize: 16, color: "#7a7a7a" }}>
                info@gamil.com
              </Typography>
            </Grid>
          </Grid>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }} sx={{ mb: 5 }}>
            <Grid item xs={2} justifyContent="center" sx={{ py: 0.5 }}>
              <Avatar
                sx={{
                  width: 45,
                  height: 45,
                  backgroundColor: "transparent",
                  color: "#172e88",
                  border: 1,
                }}
                variant="circular"
              >
                <PhoneInTalkIcon sx={{ fontSize: 28 }} />
              </Avatar>
            </Grid>
            <Grid item xs={10} sx={{}}>
              <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: "#3152a3" }}>
                Call us on
              </Typography>
              <Typography variant="p" component="p" sx={{ fontSize: 16, color: "#7a7a7a" }}>
                (+970) 59584316
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <form>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  hiddenLabel
                  sx={{ width: "100%", bgcolor: "white" }}
                  // style={{ borderRadius: "30px", border: `1px solid blue` }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  sx={{ width: "100%", bgcolor: "white" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField
                  id="outlined-basic"
                  label="Your Phone"
                  variant="outlined"
                  sx={{ width: "100%", bgcolor: "white" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  sx={{ width: "100%", bgcolor: "white" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={6}
                  placeholder="Your Message"
                  style={{ width: "100%", bgcolor: "white" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button variant="contained" size="large">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
