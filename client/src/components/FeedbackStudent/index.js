import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
function FeedbackStudent() {
  return (
    <Box className="item" sx={{ px: 12, mt: 16 }}>
      <Typography variant="h4" component="h5" sx={{ fontWeight: 600, mb: 8 }} align="center">
        Feedback From <span style={{ color: "#172e88" }}>Student</span>
      </Typography>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Carousel>
      </div>
    </Box>
  );
}
export default FeedbackStudent;
