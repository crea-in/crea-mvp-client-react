import React from "react";

import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import ProfilePic from "../../assets/img/profilepicplaceholder.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "74px",
  },
  base: {
    borderRadius: "10px",
    backgroundColor: theme.palette.primary.highlight,
    zIndex: 0,
    // marginTop: "24px",
    // marginRight: "20px",
    minHeight: "433px",
    maxWidth: "578px",
    // margin: "auto",
  },
  basediv: {
    // zIndex: 1,
    marginTop: "-410px",
    marginLeft: "122px",
  },
  top: {
    borderRadius: "10px",
    maxHeight: "433px",
    maxWidth: "578px",
    marginLeft: "142px",
    backgroundColor: theme.palette.primary.main,
    // backgroundImage: `url(${"https://www.pexels.com/photo/photo-of-woman-in-black-turtleneck-sweater-posing-in-front-of-black-background-while-looking-away-3199036/"})`,
  },
  topdiv: {
    zIndex: 2,
  },
  img: {
    maxHeight: "433px",
    maxWidth: "578px",
    borderRadius: "10px",
  },
}));

function CreatorImg() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.topdiv}>
          <Paper elevation={1} className={classes.top}>
            <CardMedia
              component="img"
              alt="Creator Picture"
              image={ProfilePic}
              title="Creator Picture"
              className={classes.img}
            />
          </Paper>
        </div>
        <div className={classes.basediv}>
        <Paper elevation={0} className={classes.base} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreatorImg;
