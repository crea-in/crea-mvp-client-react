import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import HostNav from "../components/layout/host/HostNav";
import EditSummary from "../components/layout/host/EditSummary";
import CreatorImg from "../components/layout/CreatorImg";
import HomeTabs from "../components/layout/HomeTabs";

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
          </Grid>
          <Grid item xs={12} style={{ marginTop: "50px" }}>
              <HomeTabs />
            </Grid>
            <Grid item xs={12}>
              <div style={{marginTop: "70px"}}><Typography>{`Created by Souptik Saha`}</Typography></div>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HostHome;
