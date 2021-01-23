import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
// import Button from "@material-ui/core/Button";

import { NavLogo } from "../../UiElements/NavLogo";
import HostNavButton from "../../UiElements/HostNavButton";
import CreaLogo from "../../../assets/img/CreaLogo.svg";
import EditForm from "../host/EditForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    zIndex: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(10),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    // height: "65px",
    borderBottom: "2px solid #05211d",
    height: theme.spacing(10),
  },
  rightButton: {
    marginRight: theme.spacing(8),
    // marginTop: theme.spacing(3),
  },
  loggedIn: {
    marginRight: theme.spacing(8),
  },
  // navButton:{
  //   marginTop: theme.spacing(10),
  // }

  navButtons: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    marginRight: theme.spacing(5),
  },
}));

function HostNav() {
  const classes = useStyles();
  const [auth] = React.useState(false); //, setAuth

  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLogo src={CreaLogo} draggable="false" alt="CreaLogo" />
          </Typography>
          {auth === true ? (
            <div>
              <div
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClickOpen}
                color="inherit"
                className={classes.rightButton}
              ></div>
            </div>
          ) : (
            <div>
              <div className={classes.navButtons}>
                <div>
                  <div onClick={handleClickOpen}>
                    <HostNavButton displayValue={"Edit Page"} />
                  </div>
                  <Dialog open={open} onClose={handleClickClose}>
                    <EditForm/>
                    {/*<div
                      style={{
                        backgroundColor: "whitesmoke",
                        height: "500px",
                        width: "500px",
                      }}
                      // onClick={handleClickClose}
                    >
                      {"Hello World"}
                    </div>*/}
                  </Dialog>
                </div>
                <div>
                  <HostNavButton displayValue={"Dashboard"} />
                </div>
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
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HostNav;
