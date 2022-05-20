import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
// import PersonIcon from "@mui/icons-material/Person";

// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ButtonAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user } = props;
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#172e88", px: 10 }}>
        <Toolbar>
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
                <Link
                  to="/"
                  style={{ color: "inherit", underline: "hover", textDecoration: "none" }}
                >
                  Home
                </Link>
                <Link
                  to="/"
                  style={{ color: "inherit", underline: "hover", textDecoration: "none" }}
                >
                  Courses
                </Link>
                <Link
                  to="/"
                  style={{ color: "inherit", underline: "hover", textDecoration: "none" }}
                >
                  Contact
                </Link>

                <Box>
                  <Typography
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ color: "white" }}
                  >
                    {user.name}
                  </Typography>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      {/* <Link href="/profile" color="inherit" underline="hover">
                        Profile
                      </Link> */}
                      <Link
                        to={{ pathname: "/profile" }}
                        state={user}
                        style={{ color: "inherit", textDecoration: "none", underline: "hover" }}
                      >
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/"
                        style={{ color: "inherit", textDecoration: "none", underline: "hover" }}
                      >
                        Logout
                      </Link>
                    </MenuItem>
                  </Menu>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
