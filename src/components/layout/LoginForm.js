import React from "react";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import InputField from "../UiElements/InputField";
// import { FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formBase: {
    height: "660px",
    // width: "700px",
    borderRadius: "10px",
  },
  title1: {
    fontSize: "24px",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: "62px",
  },
  title2: {
    fontSize: "36px",
    textAlign: "center",
    fontWeight: 700,
  },
  loginForm: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    alignContent: "center",
    alignItems: "center",
  },
  followbutton: {
    minWidth: "472px",
    minHeight: "40px",
    backgroundColor: theme.palette.secondary.main,
    textTransform: "none",
    color: "#FFFFFF",
    borderRadius: "10px",
    fontSize: "18px",
    marginTop: "25px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();
  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <div className={classes.root}>
          <Paper square={false} className={classes.formBase}>
            <Typography id="form-dialog-title" className={classes.title1}>
              Follow
            </Typography>
            <Typography className={classes.title2}>{"Souptik Saha"}</Typography>
            <DialogContent>
              <DialogContentText
                style={{
                  width: "400px",
                  textAlign: "center",
                  paddingLeft: "75px",
                  paddingRight: "75px",
                }}
              >
                When you follow Souptik Saha you will be the first to know about
                upcoming streams and events
              </DialogContentText>
              <form className={classes.loginForm} autoComplete="off">
                <InputField
                  type={"firstname"}
                  label={"First Name"}
                  id={"firstname"}
                />
                <InputField
                  type={"lastname"}
                  label={"Last Name"}
                  id={"lastname"}
                />
                <InputField
                  type={"email"}
                  label={"Email"}
                  maxwidth={"472px"}
                  id={"email"}
                />
                <InputField
                  type={"password"}
                  label={"Password"}
                  maxwidth={"472px"}
                  id={"password"}
                />
                <InputField
                  type={"confirmpassword"}
                  label={"Confirm Password"}
                  maxwidth={"472px"}
                  id={"confirmpassword"}
                />

                <DialogActions>
                  <Button
                    onClick={props.handleClose}
                    className={classes.followbutton}
                  >
                    Follow
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Paper>
        </div>
      </Dialog>
    </div>
  );
}
