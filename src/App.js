import "./App.css";

// import Navbar from './components/layout/Navbar';
// import Home from "./pages/Home";
import StreamView from "./pages/StreamView";
import Home from "./pages/Home"
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const styles = (theme) => ({
  root: {
    background: theme.palette.primary.main,
    minHeight: "100vh",
  },
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/stream" component={StreamView} exact />
      </Switch>
      </Router>
    </div>
  );
}

export default withStyles(styles)(App);
