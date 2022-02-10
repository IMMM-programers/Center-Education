import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import Badge from "@mui/material/Badge";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Rating from "@mui/material/Rating";

export default function PartCourse() {
  return (
    <Card sx={{ maxWidth: 300, boxShadow: `0px 0px 5px 0px` }}>
      <CardMedia align="center" sx={{ pt: 4 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <FormatQuoteIcon
              style={{ backgroundColor: "#172e88", borderRadius: "50%", color: "white" }}
            />
          }
        >
          <Box style={{ borderRadius: "50%", border: `1px solid #172e88` }} sx={{ p: 0.5 }}>
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Box>
        </Badge>
      </CardMedia>
      <CardContent align="center" sx={{ pt: 4 }}>
        <Rating name="read-only" size="small" defaultValue={4} readOnly />

        <Typography variant="p" component="p" sx={{ fontSize: 14 }}>
          Lorem Ipsum has been them an industry printer took a galley make book. Lorem Ipsum has
          been them .
        </Typography>

        <Box sx={{}}>
          <Typography variant="h6" component="h6" sx={{ fontSize: 20, mt: 3 }}>
            Mohammed
          </Typography>
          <Typography variant="h6" component="h6" sx={{ fontSize: 16, color: "#172e88" }}>
            Location
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
