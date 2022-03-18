import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
// import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function PartCourse() {
  // const a = [];
  // props.forEach((e) => {
  //   a.push({
  //     Name: e.title,
  //     category: e.categoryName,
  //     description: e.description,
  //     teacherEmail: e.teacherEmail,
  //   });
  // });
  // console.log(props);
  return (
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
      <CardContent align="left">
        <Typography variant="h6" component="h5" sx={{ fontSize: 18 }}>
          {/* {a.Name}: {a.description}. */} Course Name: Java
        </Typography>
        <Typography variant="body2" color="text.secondary">
          description:Lizards are a widespread group of squamate reptiles, with over 6,000 species
        </Typography>
        <Box sx={{ py: 0.5, px: 1, mt: 1 }}>
          <Grid container align="left">
            <Grid item xs={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="h5" sx={{ pt: 1, fontSize: 16 }}>
                {/* {a.teacherEmail} */} A@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                component="h5"
                align="center"
                sx={{
                  p: 0.5,
                  mt: 0.5,
                  ml: 2,
                  fontSize: 16,
                  fontWeight: 400,
                  backgroundColor: "#3152a3",
                  color: "white",
                  borderRadius: "5%",
                  width: "90px",
                }}
              >
                {/* {a.category} */}gsdfgn
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* <Divider variant="middle" sx={{ mt: 1 }} /> */}
        <Box sx={{ py: 0.5, px: 2, mt: 1, backgroundColor: "#f0f1f9", borderRadius: 30 }}>
          <Grid container align="left">
            <Grid item xs={10}>
              <Typography
                variant="h6"
                component="h5"
                sx={{ pt: 1, float: "Center", fontSize: 18, color: "#172e88" }}
              >
                40 Lecture
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h6"
                component="button"
                sx={{ py: 1, float: "right", fontSize: 16, color: "#172e88" }}
              >
                show
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
