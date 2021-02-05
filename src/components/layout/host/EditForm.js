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
    justifyContent: "center",
    alignContent: "space-between",
    alignItems: "center",
    height: "63vh",
  },
  uploadbutton: {
    backgroundColor: "#E5E5E5",
    textTransform: "none",
    padding: "8px 24px",
    color: "grey",
    fontWeight: 400,
    fontSize: "14px",
    borderRadius: "10px",
    marginTop: "5px",
  },
  upload: {
    margin: theme.spacing(1),
    marginRight: "auto",
  },
}));

export default function EditForm(props) {
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
            <Button onClick={props.handleClose} className={classes.b2}>
              Cancel
            </Button>
            <Button onClick={props.handleClose} className={classes.b1}>
              Save
            </Button>
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
            <div className={classes.upload}>
              <Typography
                style={{
                  fontSize: "13px",
                  color: "#0B161A",
                  fontWeight: "500",
                }}
              >
                {"Add Profile Image"}
              </Typography>
              <Button className={classes.uploadbutton}>Upload Image</Button>
            </div>
            <InputField
              id={"about"}
              label={"About Me"}
              placeholder={"Tell something about yourself"}
              multiLine={"multiline"}
              Rows={4}
              default={"Hey 👋 I just created a page here"}
            />
          </form>
        </div>
      </Paper>
    </div>
  );
}
