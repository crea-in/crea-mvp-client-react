import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import HostNav from "../components/layout/host/HostNav";
import EditSummary from "../components/layout/host/EditSummary";
// import CreatorSummary from "../components/layout/CreatorSummary";
import CreatorImg from "../components/layout/CreatorImg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  creatorImage: {
    marginTop: theme.spacing(10),
  },
}));

function HostHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HostNav />
      <div>
        <Grid container style={{ marginTop: "50px" }}>
          <Grid item xs={6}>
            <CreatorImg />
          </Grid>
          <Grid item xs={6}>
            <EditSummary />
            {/*<CreatorSummary />*/}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HostHome;
