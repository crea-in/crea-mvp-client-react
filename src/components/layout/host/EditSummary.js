import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import HomeButton from "../../UiElements/HomeButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "74px",
    marginLeft: "122px",
    display: "flex",
  },
  base: {
    minHeight: "457px",
    maxWidth: "466px",
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    marginTop: "80px",
  },
  editbox: {
    padding: theme.spacing(2),
    border: "2px dashed white",
  },
  t1: {
    fontSize: "48px",
    fontWeight: 200,
    color: "#FFFFFF",
    textAlign: "center",
  },
  t2: {
    fontSize: "34px",
    fontWeight: 500,
    color: "#FFFFFF",
    lineHeight: "42px",
  },
  t3: {
    fontSize: "14px",
    color: "#FFFFFF",
  },
  dt2: {
    marginTop: "5px",
    maxWidth: "367px",
  },
  dt3: {
    marginTop: "25px",
    maxWidth: "466px",
  },
  button: {
    marginTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "400px",
  },
}));

export default function CreatorSummary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.base} elevation={0}>
          <div className={classes.content}>
            <div className={classes.editbox}>
              <Typography className={classes.t1}>{"+"}</Typography>
              <div className={classes.dt2}>
                <Typography className={classes.t2}>
                  {"Name and short bio not added yet, click on Edit page."}
                </Typography>
              </div>
            </div>
            <div className={classes.dt3}>
              <Typography variant="body1" className={classes.t3}>
                {
                  "Hey guys, welcome to my premium members only channel. Follow me here to get  updates on upcoming livestreams and events."
                }
              </Typography>
            </div>
          </div>
          <div className={classes.button}>
            <HomeButton displayValue={"+ Follow"} />
            <HomeButton displayValue={"$ Subscribe"} />
          </div>
        </Paper>
      </div>
    </React.Fragment>
  );
}
