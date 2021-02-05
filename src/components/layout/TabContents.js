import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

import SubscribeCard from "../UiElements/SubscribeCard";

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
}));

function TabContents() {
  const classes = useStyles();

  const [summary] = useState(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, 
  remaining essentially unchanged.

  Connect me at:
  www.althaf.com
  www.instagram.com/althaf
  www.twitter.com/althaf
  `);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{marginLeft: "90px", marginRight: "90px"}}>
        <Grid item xs={8}>
          <Paper className={classes.paper}><Typography style={{fontSize: "18px"}}>{summary}</Typography></Paper>
        </Grid>
        <Grid item xs={4}>
          <SubscribeCard className={classes.paper}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default TabContents;
