import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// import LottieAnimation from "../UiElements/LottieAnimation";
import TabContents from "./TabContents";
import LivestreamContents from "./LivestreamContents";

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
        <Box p={3} borderBottom={0}>
          
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AntTabs = withStyles({
  root: {
    borderBottom: "2px solid #4B5559",
    marginLeft: "120px",
    marginRight: "120px",
  },
  indicator: {
    backgroundColor: "#00AB98",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: 500,
    fontSize: "18px",
    color: "#4B5559",
    marginRight: theme.spacing(4),
    "&:hover": {
      color: "#4B5559",
      opacity: 1,
    },
    "&$selected": {
      color: "#FFFFFF",
      fontWeight: 700,
    },
    "&:focus": {
      color: "#FFFFFF",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  appbar1: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div position="static" className={classes.appbar1}>
        <AntTabs value={value} onChange={handleChange} aria-label="nav-tabs">
          <AntTab label="Home" {...a11yProps(0)} />
          <AntTab label="Livestreams" {...a11yProps(1)} />
        </AntTabs>
      </div>
      <TabPanel value={value} index={0}>
        <TabContents/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LivestreamContents/>
      </TabPanel>
    </div>
  );
}
