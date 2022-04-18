import * as React from "react";
// import DialogVideo from "components/DialogVideo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import CardMedia from "@mui/material/CardMedia";

function createData(name, time) {
  return { name, time };
}

const rows = [
  createData("1- First Video", "8 min"),
  createData("2- Second Video", "18 min"),
  createData("3- Third Video", "14 min"),
  createData("4- Forth Video", "23 min"),
  createData("5- Fifth Video", "31 min"),
];

export default function BasicTable() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              hover
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={handleClickOpen}
            >
              <TableCell component="th" scope="row">
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 1 }} sx={{}}>
                  <Grid item xs={0.7}>
                    <Icon color="primary">video_library</Icon>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography component="h3" variant="h7">
                      {row.name}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={open} onClose={handleClose} fullWidth="900" height="100%">
        <DialogTitle id="alert-dialog-title">Video Title</DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/zSH15dIl7D0?controls=1"
          ></iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
