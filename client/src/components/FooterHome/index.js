import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function PartCourse() {
  return (
    <Box bgcolor="#dbe5ea">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{ px: 12, py: 10 }}
      >
        <Grid item xs={3}>
          <Box>
            <Typography variant="h4" component="h5" sx={{ fontWeight: 600 }}>
              Center <span style={{ color: "#172e88" }}>Education</span>
            </Typography>
            <Typography variant="h4" color="black" sx={{ mt: 2, fontSize: 20 }}>
              Palestine
            </Typography>
            <Typography variant="h5" sx={{ fontSize: 16, color: "#3152a3" }}>
              Gaza strp
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <EmailIcon sx={{ mr: 1, color: "#172e88" }} />
              <Typography variant="h5" sx={{ fontSize: 16, color: "#383838" }}>
                info@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <PhoneInTalkIcon sx={{ mr: 1, color: "#172e88" }} color="primary" />
              <Typography variant="h5" sx={{ fontSize: 16, color: "#383838" }}>
                (+970) 59584316
              </Typography>
            </Stack>

            <Box sx={{ mt: 3 }}>
              <FacebookOutlinedIcon sx={{ mr: 1 }} />
              <TwitterIcon sx={{ mr: 1 }} />
              <InstagramIcon sx={{ mr: 1 }} />
              <PinterestIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ pl: 6 }}>
            <Typography variant="h5" fontWeight={500}>
              Company
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" fontWeight={500} sx={{ mb: 2, fontSize: 16 }}>
                Privacy Policy
              </Typography>
              <Typography variant="h6" fontWeight={500} sx={{ mb: 2, fontSize: 16 }}>
                Term & Condition
              </Typography>
              <Typography variant="h6" fontWeight={500} sx={{ mb: 2, fontSize: 16 }}>
                Latest Blogs
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ pl: 6 }}>
            <Typography variant="h5" fontWeight={500}>
              Quick Links
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" fontWeight={500} sx={{ mb: 2, fontSize: 16 }}>
                Home
              </Typography>
              <Typography variant="h6" fontWeight={500} sx={{ mb: 2, fontSize: 16 }}>
                Courses
              </Typography>
              <Typography variant="h6" fontWeight={500} sx={{ mb: 2, fontSize: 16 }}>
                Contact
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ pl: 6 }}>
            <Typography variant="h5" fontWeight={500}>
              Subscribe
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="p" paragraph sx={{ mb: 2, fontSize: 16 }}>
                Lorem Ipsum has been them an industry printer took a galley make book.
              </Typography>
              <TextField label="Email" id="outlined-size-normal" sx={{ mt: 1 }} />
              <Button
                variant="contained"
                sx={{ mt: 2, width: "180px", height: "50px", fontSize: 16 }}
              >
                Subscribe Now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} bgcolor="#070e2b" sx={{ px: 12, py: 1.5 }}>
        <Grid item xs={4}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 1 }}>
            <Typography variant="h1" color="white" fontWeight={300} sx={{ fontSize: 15 }}>
              Terms of Service
            </Typography>
            <Divider orientation="vertical" flexItem color="white" />
            <Typography variant="h1" color="white" fontWeight={300} sx={{ fontSize: 15 }}>
              Privacy Policy
            </Typography>
            <Divider orientation="vertical" flexItem color="white" />
            <Typography variant="h1" color="white" fontWeight={300} sx={{ fontSize: 15 }}>
              Sitemap
            </Typography>
            <Divider orientation="vertical" flexItem color="white" />
            <Typography variant="h1" color="white" fontWeight={300} sx={{ fontSize: 15 }}>
              Security
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          {" "}
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h1" color="white" fontWeight={300} sx={{ fontSize: 15 }}>
            © 2021 EDULE Made with by <span style={{ color: "#172e88" }}>Codecarnival</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
