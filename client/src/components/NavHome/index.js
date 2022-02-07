import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

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
            <Grid item xs={3}>
              <Typography variant="h6" component="div" sx={{ pt: 1.5 }}>
                Center Education
              </Typography>
            </Grid>
          </Grid>
          <Stack direction="row" spacing={1}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Courses</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
