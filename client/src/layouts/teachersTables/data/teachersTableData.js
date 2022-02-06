/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
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
  const User = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar
        src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
        name={name}
        size="sm"
      />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const deleteTeacher = (email) => {
    axios
      .delete(`/api/users/deleteUser/${email}`)
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
      user: (
        <User
          image="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
          name={e.name}
          email={e.email}
        />
      ),
      courses: e.coursesNum,
      status: (
        <MDBox ml={-1}>
          {e.status === 0 ? (
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          ) : (
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          )}
        </MDBox>
      ),
      phone_number: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {e.phoneNumber}
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
          onClick={() => deleteTeacher(e.email)}
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
      { Header: "user", accessor: "user", width: "45%", align: "left" },
      { Header: "courses", accessor: "courses", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "phone_number", accessor: "phone_number", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: a,
  };
}
