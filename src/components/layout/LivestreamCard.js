import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";

import Thumbnail from "../../assets/img/streamcard.jpg";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "330px",
    borderRadius: "10px",
    marginBottom: theme.spacing(3),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  content2: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  streamRegister: {
    padding: "10px",
    width: "150px",
    borderRadius: "50px",
    backgroundColor: theme.palette.primary.highlight,
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 500,
    color: "#ffffff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            style={{
              fontWeight: 700,
              fontSize: "24px",
              margin: theme.spacing(2),
            }}
          >
            {props.videoData[props.index].title}
          </Typography>
          <Typography
            style={{
              fontWeight: 400,
              fontSize: "14px",
              width: "415px",
              margin: theme.spacing(2),
            }}
          >
            {props.videoData[props.index].details}
          </Typography>
          <div className={classes.content2}>
            <CalendarTodayOutlinedIcon
              style={{ fontSize: 15, marginRight: "5px" }}
            />
            <Typography style={{ fontSize: "11px", fontWeight: 400 }}>
              {props.videoData[props.index].date}
            </Typography>
            <LanguageOutlinedIcon
              style={{ fontSize: 15, marginLeft: "15px", marginRight: "5px" }}
            />
            <Typography style={{ fontSize: "11px", fontWeight: 400 }}>
              {props.videoData[props.index].privacy}
            </Typography>
          </div>
        </CardContent>
        <div className={classes.controls}>
          <Button className={classes.streamRegister}>{`Register`}</Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={Thumbnail}
        title="Live Thumbnail"
      />
    </Card>
  );
}
