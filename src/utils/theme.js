import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0B161A",
      dark: "#0F1C21",
      light: "#192E36",
      highlight: "#00AB98",
    },
    secondary: {
      main: "#00B2CA",
      dark: "#163845",
      light: "#0090a9",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: "5",
        fontSize: "14px",
      },
    },
    MuiInput: {
      input: {
        "&::placeholder": {
          color: "white",
        },
        // color: "white", // if you also want to change the color of the input, this is the prop you'd use
      },
    },
  },
});

export default theme;
