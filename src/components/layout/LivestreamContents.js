import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import SubscribeCard from "../UiElements/SubscribeCard";
import LottieAnimation from "../UiElements/LottieAnimation";
import LivestreamCard from "./LivestreamCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.primary,
    fontSize: "18px",
    minHeight: "300px",
    borderRadius: "10px",
  },
  paper2: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function TabContents() {
  const classes = useStyles();

  const [videos] = useState([
    {
      id: "1",
      title: "How I found my art style recent.",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      date: "Dec 25 at 4:00 PM",
      privacy: "Public",
    },
    {
      id: "2",
      title: "How I found my art style previous.",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      date: "Aug 14 at 4:00 PM",
      privacy: "Public",
    },
  ]);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        style={{ marginLeft: "90px", marginRight: "90px" }}
      >
        <Grid item xs={8}>
          {videos.length > 0 ? (
            <div>
                {videos.map((item, i)=>(
                    <React.Fragment key={item.id}>
                    <LivestreamCard videoData={videos} index={i} /><br/>
                    </React.Fragment>
                ))}
            </div>
          ) : (
            <Paper className={classes.paper2} elevation="0">
              <LottieAnimation />
            </Paper>
          )}
        </Grid>
        <Grid item xs={4}>
          <SubscribeCard className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  );
}

export default TabContents;
