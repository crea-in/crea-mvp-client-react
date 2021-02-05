import { React, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90%",
  },
  contents: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(10, 10, 10, 10),
    justifyContent: "center",
    alignItems: "center",
  },
  c1: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "white",
    height: "280px",
    margin: theme.spacing(2),
    borderRadius: "8px",
  },
  c3: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "white",
    height: "280px",
    width: "100%",
    margin: theme.spacing(6, 2, 4, 2),
    borderRadius: "8px",
  },
  leftHeader: {
    fontSize: 24,
    fontWeight: 700,
  },
  rightHeader: {
    display: "flex",
    alignItems: "center",
  },
  fullHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectLeft: {
    fontSize: "18px",
    cursor: "pointer",
    textTransform: "none",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "white",
      fontWeight: 700,
    },
  },
  trends: {
    alignItems: "center",
    textAlign: "center",
    paddingTop: "15px",
  },
  value: {
    fontSize: "64px",
    fontWeight: 600,
  },
  date: {
    fontSize: "14px",
    fontWeight: 400,
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  },
  viewTrends: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

function Overview() {
  const classes = useStyles();

  const [earnings, setEarnings] = useState(0);
  const [subscribers, setSubscribers] = useState(0);
  const hostname = useState({ name: "Souptik Saha", username: "souptiksaha" });

  return (
    <div className={classes.root}>
      <div className={classes.contents}>
        <Card variant="outlined" className={classes.c1}>
          <CardContent>
            <div className={classes.fullHeader}>
              <Typography className={classes.leftHeader}>Earnings</Typography>
              <div className={classes.rightHeader}>
                <Button
                  disableRipple
                  className={classes.selectLeft}
                  onClick={() => {
                    setEarnings(350);
                    setSubscribers(70);
                  }}
                >
                  This month
                </Button>
                <Typography
                  style={{
                    fontSize: "18px",
                    cursor: "default",
                  }}
                >
                  {" "}
                  |{" "}
                </Typography>
                <Button
                  disableRipple
                  className={classes.selectLeft}
                  onClick={() => {
                    setSubscribers(340);
                    setEarnings(2674);
                  }}
                >
                  Total
                </Button>
              </div>
            </div>
            <div className={classes.trends}>
              <Typography style={{ fontSize: "64px", fontWeight: 600 }}>
                ${earnings}
              </Typography>
              <Typography
                style={{ fontSize: "14px", fontWeight: 400, color: "#4B5559" }}
              >
                ({subscribers} Subscribers)
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.c1}>
          <CardContent>
            <Typography className={classes.leftHeader}>
              Start Sharing
            </Typography>
            <div className={classes.sharing}>
              <div style={{ paddingTop: "30px" }}>
                <Typography style={{ fontSize: "24px", fontWeight: 600 }}>
                  {hostname[0].name}
                </Typography>
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    marginTop: "-8px",
                  }}
                >
                  www.crea.live.com/{hostname[0].username}
                </Typography>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <Button
                  disableRipple
                  style={{
                    textTransform: "none",
                    fontSize: "14px",
                    backgroundColor: "#C4C4C4",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  📎 Copy URL
                </Button>
                <Button
                  disableRipple
                  style={{
                    textTransform: "none",
                    fontSize: "14px",
                    backgroundColor: "#C4C4C4",
                    marginLeft: "24px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                  }}
                >
                  Tweet
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.c3}>
          <CardContent>
            <Typography className={classes.leftHeader}>Page views</Typography>
            <div className={classes.viewTrends}>
              <div className={classes.stat}>
                <div>
                  <Typography className={classes.value}>57</Typography>
                </div>
                <div>
                  <Typography className={classes.date}>Today</Typography>
                </div>
              </div>
              <div className={classes.stat}>
                <div>
                  <Typography className={classes.value}>124</Typography>
                </div>
                <div>
                  <Typography className={classes.date}>This Week</Typography>
                </div>
              </div>
              <div className={classes.stat}>
                <div>
                  <Typography className={classes.value}>255</Typography>
                </div>
                <div>
                  <Typography className={classes.date}>This Month</Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Overview;
