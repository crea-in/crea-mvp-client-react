import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  margin: {
    marginRight: theme.spacing(2),
    minWidth: "100px",
    minHeight: "40px",
    backgroundColor: theme.palette.primary.highlight,
    textTransform: "none",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function HomeButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        disableElevation={true}
        className={classes.margin}
      >
        {props.displayValue}
      </Button>
    </div>
  );
}
