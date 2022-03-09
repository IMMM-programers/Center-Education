/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";
import axios from "axios";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

// export default function data({props}) {
export default function data(props) {
  const deleteCourse = (title) => {
    axios
      .delete(`/api/courses/deleteCourse/${title}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const a = [];
  props.forEach((e) => {
    a.push({
      title: (
        <MDBox lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {e.title}
          </MDTypography>
        </MDBox>
      ),
      description: e.description,
      categoryName: (
        <MDBox lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {e.categoryName}
          </MDTypography>
        </MDBox>
      ),
      edit: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          // onClick={() => deleteCourse(e.title)}
        >
          Edit
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          onClick={() => deleteCourse(e.title)}
        >
          Delete
        </MDTypography>
      ),
    });
  });
  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "title", accessor: "title", width: "20%", align: "left" },
      { Header: "description", accessor: "description", width: "30%", align: "left" },
      { Header: "category name", accessor: "categoryName", align: "center" },
      { Header: "edit", accessor: "edit", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: a,
  };
}
