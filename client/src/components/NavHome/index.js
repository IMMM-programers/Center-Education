import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import PersonIcon from "@mui/icons-material/Person";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#172e88", px: 10 }}>
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Grid container align="left">
            <Grid item xs={1}>
              <img
                src="https://seeklogo.com/images/E/education-circle-logo-7FB9212F5A-seeklogo.com.png"
                alt="{item.title}"
                loading="lazy"
                width="50px"
                height="50px"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="div" sx={{ pt: 1.5 }}>
                Center Education
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ pt: 2 }}>
              <Stack direction="row" spacing={4}>
                <Link href="/" color="inherit" underline="hover">
                  Home
                </Link>
                <Link href="/all-courses" color="inherit" underline="hover">
                  Courses
                </Link>
                <Link href="/" color="inherit" underline="hover">
                  Contact
                </Link>

                <Link href="/login" color="inherit" underline="hover" sx={{ mr: 5 }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <PersonIcon sx={{ my: 0.3, mr: 1, fontSize: 18 }} />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h7" component="">
                        Login
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
                <Link href="/SignUp" color="inherit" underline="hover" sx={{}}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="h7" component="">
                        Register
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
