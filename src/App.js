import "./App.css";

// import Navbar from './components/layout/Navbar';
import Home from "./pages/Home";
import { withStyles } from "@material-ui/core/styles";

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
      <Home />
    </div>
  );
}

export default withStyles(styles)(App);
