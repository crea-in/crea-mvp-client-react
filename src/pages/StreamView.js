import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Live from "../components/layout/Live";
import SuperChat from "../components/layout/SuperChat";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  chat: {
    borderLeft: "100%",
    borderLeftColor: "#363636",
    borderStyle: "none none none solid",
    borderLeftWidth: "1px",
  },
}));

function StreamView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={9}>
          <div>
            <Live />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.chat}>
            <SuperChat />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default StreamView;
