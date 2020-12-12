import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} borderBottom={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  appbar:{
    // borderBottomWidth: "5px",
    // borderBottomColor: "#fff",
  },
  tab: {
      textTransform: "none",
  },
  tabs: {}
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appbar}>
        <Tabs value={value} onChange={handleChange} aria-label="nav-tabs" className={classes.tabs}>
          <Tab label="Videos" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="About" {...a11yProps(1)} className={classes.tab}/>
          <Tab label="Community" {...a11yProps(2)} className={classes.tab}/>
          <Tab label="Activity" {...a11yProps(3)} className={classes.tab}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Videos
      </TabPanel>
      <TabPanel value={value} index={1}>
        About
      </TabPanel>
      <TabPanel value={value} index={2}>
        Community
      </TabPanel>
      <TabPanel value={value} index={3}>
        Activity
      </TabPanel>
    </div>
  );
}
