/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  const User = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

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
      { Header: "user", accessor: "user", width: "45%", align: "left" },
      { Header: "courses", accessor: "courses", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "phone_number", accessor: "phone_number", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        user: <User image={team2} name="John Michael" email="john@creative-tim.com" />,
        courses: 2,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        phone_number: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0592145632
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Delete
          </MDTypography>
        ),
      },
      {
        user: <User image={team3} name="mohamed" email="john@creative-tim.com" />,
        courses: 2,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        phone_number: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0592145632
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Delete
          </MDTypography>
        ),
      },
    ],
  };
}