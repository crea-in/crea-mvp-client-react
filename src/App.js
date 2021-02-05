import "./App.css";

// import Navbar from './components/layout/Navbar';
import Home from "./pages/Home";
import StreamView from "./pages/StreamView";
import HostHome from "./pages/HostHome";
import HostDashboard from "./pages/HostDashboard";
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
      <Route path="/hosthome" component={HostHome} exact />
      <Route path="/hostdashboard" component={HostDashboard} exact />
      <Route path="/hostdashboard/Overview" component={HostDashboard} exact />
      <Route path="/hostdashboard/Livestreams" component={HostDashboard} exact />
      <Route path="/hostdashboard/Members" component={HostDashboard} exact />
      <Route path="/hostdashboard/Settings" component={HostDashboard} exact />
    </Switch>
    </Router>
    </div>
  );
}

export default withStyles(styles)(App);
