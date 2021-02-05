import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";

import InputField from "../../UiElements/HostInputField";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90%",
  },
  contents: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(10, 11, 10, 11),
    // backgroundColor: "grey",
  },
  c1: {
    padding: theme.spacing(2),
    backgroundColor: "white",
    minHeight: "280px",
    width: "100%",
    margin: theme.spacing(0, 0, 4, 0),
    borderRadius: "8px",
  },
  header: {
    fontSize: 24,
    fontWeight: 700,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 600,
  },
  paragraph: {
    lineHeight: "19px",
    fontSize: 14,
    fontWeight: 400,
  },
  text: {
    maxWidth: "430px",
    margin: theme.spacing(1),
  },
  text2: {
    maxWidth: "540px",
  },
  avatar: {
    borderRadius: "10px",
    height: 47,
    width: 47,
  },
  button: {
    textTransform: "none",
    backgroundColor: "#C4C4C4",
    fontSize: 14,
    padding: theme.spacing(1, 3, 1, 3),
    marginRight: theme.spacing(15),
  },
  button4: {
    textTransform: "none",
    backgroundColor: "#C4C4C4",
    fontSize: 14,
    padding: theme.spacing(1, 3, 1, 3),
    marginRight: theme.spacing(5),
    margin: theme.spacing(1),
  },
  button3: {
    textTransform: "none",
    backgroundColor: "black",
    fontSize: 14,
    color: "white",
    padding: theme.spacing(1, 3, 1, 3),
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#C4C4C4",
    },
  },
  buttongroup: {
    paddingRight: theme.spacing(7),
  },
  button2: {
    textTransform: "none",
    backgroundColor: "#C4C4C4",
    fontSize: 14,
    padding: theme.spacing(1, 3, 1, 3),
    alignSelf: "flex-end",
    marginRight: theme.spacing(8),
  },
  cardBody: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "150px",
    // backgroundColor: "grey",
  },
  cardBody2: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "200px",
    paddingTop: theme.spacing(8),
    // backgroundColor: "grey",
  },
  description: {
    display: "flex",
    alignItems: "center",
  },
}));

function Settings() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contents}>
        <Card variant="outlined" className={classes.c1}>
          <CardContent>
            <Typography className={classes.header}>Payouts</Typography>
            <div className={classes.cardBody}>
              <div className={classes.description}>
                <Avatar variant="rounded" className={classes.avatar}>
                  RZPY
                </Avatar>
                <div className={classes.text}>
                  <Typography className={classes.subheader}>
                    Razorpay
                  </Typography>
                  <Typography className={classes.paragraph}>
                    {
                      "Accept debit / credit cards, UPI, and NetBanking. Paid out to your bank account in 4 days."
                    }
                  </Typography>
                </div>
              </div>
              <Button className={classes.button}>Enable</Button>
            </div>
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.c1}>
          <CardContent>
            <Typography className={classes.header}>Membership</Typography>
            <div className={classes.cardBody2}>
              <div className={classes.text2}>
                <Typography className={classes.subheader}>
                  Setup your membership prize
                </Typography>
                <Typography className={classes.paragraph}>
                  {
                    "You can come back and change this at any time. You put a lot of time and effort into your work, so don’t be afraid to set a higher price."
                  }
                </Typography>
                <InputField
                  id={"price"}
                  label={"Monthly"}
                  placeholder={"$0"}
                  type={"number"}
                />
              </div>

              <Button className={classes.button2}>Save</Button>
            </div>
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.c1}>
          <CardContent>
            <Typography className={classes.header}>
              Live stream settings
            </Typography>
            <div className={classes.cardBody}>
              <div className={classes.description}>
                <Avatar variant="rounded" className={classes.avatar}>
                  OBS
                </Avatar>
                <div className={classes.text}>
                  <Typography className={classes.subheader}>
                    OBS for livestreaming
                  </Typography>
                  <Typography className={classes.paragraph}>
                    {
                      "Accept debit / credit cards, UPI, and NetBanking. Paid out to your bank account in 4 days."
                    }
                  </Typography>
                </div>
              </div>
              <div className={classes.buttongroup}>
                <Button className={classes.button4}>Download</Button>
                <Button className={classes.button3}>User Guide</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Settings;
