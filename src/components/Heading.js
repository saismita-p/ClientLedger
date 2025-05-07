import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ActionButton from "../components/ActionButton";

const Heading = ({ onLogout }) => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "text.primary",
        marginBottom: 0,
        zIndex: 9999,
        border: 0,
        borderRadius: 0,
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        fontSize: "1.2em",
        lineHeight: "1.42857143",
        letterSpacing: "4px",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 64,
          alignItems: "stretch", // Allow button full height
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.primary",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            letterSpacing: "4px",
            pl: 2,
          }}
        >
          Accounting App
        </Typography>

        {onLogout && (
          <ActionButton
            label="Logout"
            onClick={onLogout}
            variant="text"
            width="140px"
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Heading;
