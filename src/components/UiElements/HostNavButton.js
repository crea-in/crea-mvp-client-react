import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    marginRight: theme.spacing(3),
    minWidth: "120px",
    height: "40px",
    color: "black",
    fontWeight: 700,
    fontSize: 14,
    backgroundColor: "white",
    textTransform: "none",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "grey",
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
