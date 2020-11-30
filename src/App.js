import './App.css';

import Navbar from './components/layout/Navbar';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root:{
    background: theme.palette.primary.main,
    minHeight: '100vh',
    
  }
})

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Navbar/>
    </div>
  );
}

export default withStyles(styles, {withTheme: true})(App);
