import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PieChartRoundedIcon from "@material-ui/icons/PieChartRounded";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SettingsIcon from "@material-ui/icons/Settings";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreaLogo from "../assets/img/CreaLogo.svg";
import { NavLogo } from "../components/UiElements/NavLogo";

import Overview from "../components/layout/host/Overview";
import HostLivestream from "../components/layout/host/HostLivestream";
import Members from "../components/layout/host/Members";
import Settings from "../components/layout/host/Settings";

const drawerWidth = 255;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
    minHeight: "100vh",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    color: "black",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
    backgroundColor: "#363740",
    paddingTop: theme.spacing(5),
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#363740",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  listitem: {
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#0B161A3F",
      opacity: 1,
    },
    "&$selected": {
      backgroundColor: "#9fa2b42a",
      // borderRightWidth: "5px",
      // borderRightColor: "#DDE2FF",
      "&:hover": {
        backgroundColor: "#0B161A3F",
        opacity: 1,
      },
    },
  },
  listitemicon: {
    paddingLeft: "15px",
  },
  listitemtext: {
    color: "#DDE2FF",
    fontWeight: 400,
    fontSize: "16px",
    "&:hover": {
      fontWeight: 500,
    },
  },
  rightButtons: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    marginRight: theme.spacing(10),
  },
  loggedIn: {
    marginLeft: theme.spacing(5),
  },
  button: {
    backgroundColor: "#0B161A",
    textTransform: "none",
    color: "white",
    fontSize: "14px",
    padding: "12px 24px 12px 24px",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#363740",
    },
  },
  link: {
    textDecoration: "none",
  },
  selected: {},
}));

export default function HostDashboard() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar elevation={0} position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.rightButtons}>
              <div
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                className={classes.loggedIn}
              >
                <Avatar alt="Logged In" onClick={handleClick}>
                  OP
                </Avatar>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  style={{
                    paddingLeft: "35px",
                    paddingRight: "35px",
                    fontSize: "18px",
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
              <Button className={classes.button}>{"My Page"}</Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.drawerHeader}>
            <NavLogo src={CreaLogo} draggable="false" alt="CreaLogo" />
          </div>
          <div className={classes.toolbar} />

          <Divider />
          <List className={classes.list}>
            {["Overview", "Livestreams", "Members", "Settings"].map(
              (text, index) => (
                <Link
                  to={`/hostdashboard/` + text}
                  className={classes.link}
                  key={text}
                >
                  <ListItem
                    classes={{
                      button: classes.listitem,
                      selected: classes.selected,
                    }}
                    button
                    disableRipple
                    selected={selectedIndex === index}
                    onClick={(event) => {
                      handleListItemClick(event, index);
                    }}
                    key={text}
                  >
                    <ListItemIcon className={classes.listitemicon}>
                      {index === 0 ? (
                        <PieChartRoundedIcon style={{ color: "#DDE2FF" }} />
                      ) : index === 1 ? (
                        <LiveTvRoundedIcon style={{ color: "#DDE2FF" }} />
                      ) : index === 2 ? (
                        <PeopleAltRoundedIcon style={{ color: "#DDE2FF" }} />
                      ) : (
                        <SettingsIcon style={{ color: "#DDE2FF" }} />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.listitemtext }}
                      primary={text}
                    />
                  </ListItem>
                </Link>
              )
            )}
          </List>
          <Divider />
        </Drawer>
        <Switch>
          <Route exact path="/hostdashboard">
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Overview />
            </main>
          </Route>
          <Route exact path="/hostdashboard/Overview">
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Overview />
            </main>
          </Route>
          <Route exact path="/hostdashboard/Livestreams">
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <HostLivestream />
            </main>
          </Route>

          <Route exact path="/hostdashboard/Members">
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Members />
            </main>
          </Route>
          <Route exact path="/hostdashboard/Settings">
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Settings />
            </main>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
