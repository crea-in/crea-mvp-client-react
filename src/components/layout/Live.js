import { React, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  player: {
    margin: theme.spacing(5),
    marginBottom: theme.spacing(-5),
    backgroundColor: "darkgrey",
    height: "80vh",
    width: "70vw",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row-reverse",
  },
  status: {
    flexGrow: 1,
    // position: "fixed",
    margin: "2vh",
    display: "flex",
    justifyContent: "center",
    maxWidth: "80px",
    maxHeight: "18px",
    borderRadius: "12px",
    padding: theme.spacing(0.3),
    color: "white",
    backgroundColor: "red",
  },
  contents: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(7),
    justifyContent: "space-between",
  },
  exit: {
    textTransform: "none",
    color: "white",
    backgroundColor: "red",
    minWidth: "80px",
    borderRadius: "15px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#d90000",
    },
  },
  streamtitle: {
    fontSize: "2.25rem",
    fontWeight: 700,
    color: "white",
    paddingRight: "35vw",
  },
  viewcount: {
    flexGrow: 1,
    flexDirection: "row",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    padding: "3px",
    maxWidth: "50px",
    borderRadius: "15px",
    backgroundColor: "white",
    color: "black",
  },
  streamcreator: {
    color: "#A09E9E",
    fontSize: "18px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      "text-decoration": "underline",
      cursor: "pointer",
    },
  },
}));

function Live() {
  const classes = useStyles();

  const [videoData] = useState([
    {
      title: "How I found my art style.",
      creator: "Souptik Saha",
      viewers: "244",
      time: "00:23:44",
    },
  ]);

  return (
    <div className={classes.root}>
      <div className={classes.player}>
        <div className={classes.status}>
          <Typography>Live</Typography>
        </div>
        <video></video>
      </div>
      <div className={classes.contents}>
        <div>
          <Typography className={classes.streamtitle}>
            {videoData[0].title}
          </Typography>
        </div>

        <Button className={classes.exit}>Exit Stream</Button>

        <div className={classes.viewcount}>
          <PeopleOutlineIcon />
          <Typography>{videoData[0].viewers}</Typography>
        </div>
        <Typography style={{ color: "white" }}>{videoData[0].time}</Typography>
      </div>
      <Typography className={classes.streamcreator}>
        By {videoData[0].creator}
      </Typography>
    </div>
  );
}

export default Live;
