/* eslint-disable react/prop-types */
// @mui material components
// import Tooltip from "@mui/material/Tooltip";

import * as React from "react";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";

// import axios from "axios";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
import axios from "axios";

export default function data() {
  // const avatars = (members) =>
  //   members.map(([image, name]) => (
  //     <Tooltip key={name} title={name} placeholder="bottom">
  //       <MDAvatar
  //         src={image}
  //         alt="name"
  //         size="xs"
  //         sx={{
  //           border: ({ borders: { borderWidth }, palette: { white } }) =>
  //             `${borderWidth[2]} solid ${white.main}`,
  //           cursor: "pointer",
  //           position: "relative",

  //           "&:not(:first-of-type)": {
  //             ml: -1.25,
  //           },

  //           "&:hover, &:focus": {
  //             zIndex: "10",
  //           },
  //         }}
  //       />
  //     </Tooltip>
  //   ));

  const [inputValues, setInputValues] = React.useState({
    courses: [],
  });
  const { courses } = inputValues;

  React.useEffect(() => {
    axios
      .get("/api/courses/allCourses")
      .then((response) => {
        setInputValues({
          ...inputValues,
          courses: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Title = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const a = [];
  courses.forEach((e) => {
    a.push({
      title: <Title name={e.title} />,
      categoryName: (
        <MDBox display="flex" py={1}>
          {e.categoryName}
        </MDBox>
      ),
      teacherName: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {e ? e.teacherEmail.match(/\w+/)[0] : 0}
        </MDTypography>
      ),
      videosNumber: (
        <MDBox display="flex" py={1}>
          {e ? e.videos.length : 0}
        </MDBox>
      ),
    });
  });

  return {
    columns: [
      { Header: "title", accessor: "title", width: "26%", align: "left" },
      { Header: "categoryName", accessor: "categoryName", width: "15%", align: "left" },
      { Header: "teacherName", accessor: "teacherName", width: "32%", align: "center" },
      { Header: "videosNumber", accessor: "videosNumber", align: "center" },
    ],

    rows: a,
  };
}
