import React from "react";
import Navbar from "../components/layout/Navbar";
import CreatorImg from "../components/layout/CreatorImg";
import CreatorSummary from "../components/layout/CreatorSummary";
import HomeTabs from "../components/UiElements/HomeTabs";
import LottieAnimation from "../components/UiElements/LottieAnimation";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
          <Grid container xs={12}>
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
              <LottieAnimation />
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
