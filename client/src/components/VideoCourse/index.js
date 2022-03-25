import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function VideoCourse(props) {
  //   const a = [];
  //   props.forEach((e) => {
  //     a.push({
  //       Name: e.title,
  //     });
  //   });
  //   const { title } = props;
  return (
    <Box sx={{ maxWidth: 340 }}>
      <Box>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMxqFiYQ4S-GGwI1EywQeRRy6dJ0AO4KJcw&usqp=CAU"
          alt="{item.title}"
          loading="lazy"
          width="100%"
          height="200"
        />
      </Box>
      <Box align="left">
        <Typography variant="h7" component="h3">
          {/* {a.Name}: {a.description}. */} Course Name {/*title*/}
        </Typography>
      </Box>
    </Box>
  );
}
