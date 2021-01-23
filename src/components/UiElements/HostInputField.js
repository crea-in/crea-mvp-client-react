import React from "react";

import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
// import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const CustomInput = withStyles((theme, props) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 10,
    position: "relative",
    backgroundColor: "#C4C4C4",
    border: "1px solid #ced4da",
    fontSize: 16,
    // width: "auto",
    padding: "12px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade("#00B2CA", 0.25)} 0 0 0 0.2rem`,
      borderColor: "ca5b3c",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function InputField(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel
          shrink
          htmlFor={props.id}
          style={{ fontSize: "18px", color: "#0B161A", fontWeight: "500" }}
        >
          {props.label}
        </InputLabel>
        <CustomInput
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          style={{ minWidth: "30vw" }}
        />
      </FormControl>
    </div>
  );
}

export default InputField;
