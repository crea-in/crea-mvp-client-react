import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";

import InputField from "../../UiElements/HostInputField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: "80vh",
    // width: "25vw",
    padding: "30px 50px 0px 50px",
    // borderRadius: "20px",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  b2: {
    backgroundColor: "#c4c4c4",
    textTransform: "none",
    padding: "10px 24px",
    color: "black",
    fontSize: "14px",
    borderRadius: "8px",
  },
  b1: {
    backgroundColor: "#00AB98",
    textTransform: "none",
    padding: "10px 24px",
    color: "white",
    fontSize: "14px",
    borderRadius: "8px",
    marginLeft: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  edit: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function EditForm() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.card}>
        <div className={classes.base}>
          <div className={classes.title}>
            <Typography
              style={{
                fontSize: "32px",
                fontWeight: 700,
                paddingRight: "10vw",
              }}
            >
              {"Edit page"}
            </Typography>
            <Button className={classes.b2}>Cancel</Button>
            <Button className={classes.b1}>Save</Button>
          </div>
          <form className={classes.edit} autoComplete="off">
            <InputField
              type={"fullname"}
              label={"Full Name"}
              id={"fullname"}
              placeholder={"Add your full name here"}
            />
            <InputField
              type={"description"}
              label={"Add your awesome one liner bio"}
              id={"description"}
              placeholder={"Giving tips and tricks on UI/UX Designing"}
              style={{ paddingTop: "3px" }}
            />
          </form>
        </div>
      </Paper>
    </div>
  );
}
