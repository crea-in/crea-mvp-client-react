import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
    width: "100px",
    height: "40px",
    backgroundColor: theme.palette.secondary.main,
    textTransform: "none",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function NavButton(props) {
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
