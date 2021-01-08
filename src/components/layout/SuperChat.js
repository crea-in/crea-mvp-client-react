import { React, useState, useRef, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
// import Button from '@material-ui/core/Button';
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: theme.palette.secondary.dark,
  },
  icon: {
    marginRight: theme.spacing(0.5),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  t2: {
    display: "flex",
  },
  chatview: {
    height: "82vh",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column-reverse",

    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: "#363636",
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: "grey",
    },
  },

  frm:{
    flexGrow: 1,
    height: "70px",
    // minWidth: "383px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.dark,
    // position: "fixed",
    // marginTop: "25px",
    bottom: 0,
  },
  rootinp: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "21.5vw",
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
  },
  input: {
    marginLeft: theme.spacing(1),
    color: "white",
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "white",
    '&:disabled': {
      color: "grey",
    }
  },
}));

function SuperChat() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" className={classes.bar}>
        <Toolbar>
          <div className={classes.title}>
            <div className={classes.t2}>
              <div className={classes.icon}>
                <ForumRoundedIcon />
              </div>
              <Typography variant="h5">Chat</Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <ChatRoom />
    </div>
  );
}

function ChatRoom() {
  const classes = useStyles();

  const dummy = useRef();
  const messagesRef = {};
  const [messages] = "";
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = {};

    await messagesRef.add({
      text: formValue,
      createdAt: "timestamp",
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <div className={classes.chatview}>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>

        <form onSubmit={sendMessage} className={classes.frm}>
          <Paper component="form" className={classes.rootinp}>
            <InputBase
              className={classes.input}
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Type your message here..."
              inputProps={{ "aria-label": "superchat" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              disabled={!formValue}
              aria-label="search"
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </form>
    </Fragment>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid;

  return (
    <Fragment>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL
          }
          alt="dp"
        />
        <Typography variant="body1">{text}</Typography>
      </div>
    </Fragment>
  );
}

export default SuperChat;
