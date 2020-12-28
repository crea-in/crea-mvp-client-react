import React from "react";
import Navbar from "../components/layout/Navbar";
import CreatorImg from "../components/layout/CreatorImg";
import CreatorSummary from "../components/layout/CreatorSummary";
import HomeTabs from "../components/layout/HomeTabs";
// import LottieAnimation from "../components/UiElements/LottieAnimation";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  creatorImage: {
    marginTop: theme.spacing(10),
  },
}));

function Home() {
  const classes = useStyles();
  //   const theme = useTheme();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Navbar />
        <div>
          <Grid container style={{marginTop: "50px"}}>
            <Grid item xs={6}>
              <CreatorImg />
            </Grid>
            <Grid item xs={6}>
              <CreatorSummary />
            </Grid>
            <Grid item xs={12} style={{ marginTop: "50px" }}>
              <HomeTabs />
            </Grid>
            <Grid item xs={12}>
              <div style={{marginTop: "70px"}}><Typography>Created by Souptik Saha</Typography></div>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
