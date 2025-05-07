import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002d53", // Dark blue for theme primary color
    },
    secondary: {
      main: "#d44b40", // Soft red if needed
    },
    background: {
      default: "#f5f5f5", // Light background
    },
    text: {
      primary: "#000000", // Black main text
      secondary: "#1b3a57", // Secondary dark blue text
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    button: {
      fontWeight: 600,
      fontSize: "0.9rem",
      letterSpacing: "3px",
      textTransform: "uppercase",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.2em",
      letterSpacing: "4px",
      lineHeight: "1.42857143",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          height: "100%", // <--- Full height stretching
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
          color: "#002d53", // Normal color
          backgroundColor: "transparent", // Default transparent background
          "&:hover": {
            backgroundColor: "#002d53", // Dark blue background on hover
            color: "#ffffff", // White text on hover
          },
          transition: "all 0.3s ease",
        },
      },
    },
  },
});

export default theme;
