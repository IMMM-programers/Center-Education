import * as React from "react";
import Navbar from "components/NavHome";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 22,
            pl: 12,
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
                src="https://images.unsplash.com/photo-1549388604-817d15aa0110"
                alt="{item.title}"
                loading="lazy"
                width="400"
                height="400"
              />
            </Grid>
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  );
}
