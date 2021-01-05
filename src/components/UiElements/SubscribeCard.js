import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "330px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    borderRadius: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 500,
    textAlign: "center",
    borderBottom: "4px solid #00B2CA",
    marginLeft: "100px",
    marginRight: "100px",
  },
  pos: {
    margin: 12,
    marginTop: "22px",
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.secondary.main,
    border: "1px solid #00B2CA",
    padding: "11px",
  },
  subButton: {
    textTransform: "none",
    borderRadius: "50px",
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    fontSize: "16px",
    width: "350px",
    height: "50px",
    marginLeft: "5%",
    marginRight: "5%",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  perks: {
    height: "70px",
    overflowY: "auto",
    marginBottom: theme.spacing(3),
  },
  perk: {
    fontSize: "14px",
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles();

  const [perkData] = useState([
    { id: "1", name: "Perks for your Subs 1" },
    { id: "2", name: "Perks for your Subs 2" },
  ]);

  return (
    <Card className={classes.root} variant="outlined">
      <div style={{ marginLeft: "94%" }}>
        <HighlightOffRoundedIcon style={{ fontSize: 25 }} />
      </div>
      <CardContent style={{ marginTop: -25 }}>
        <Typography className={classes.title}>💚 Subscribe</Typography>
        <Typography className={classes.pos}>$ {"500"}/Month</Typography>
        <div className={classes.perks}>
          <ul>
            {perkData.map((item, index) => (
              <React.Fragment key={item.id}>
                <li>
                  <Typography className={classes.perk}>{item.name}</Typography>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardActions>
        <Button className={classes.subButton}>{`$ Subscribe`}</Button>
      </CardActions>
    </Card>
  );
}
