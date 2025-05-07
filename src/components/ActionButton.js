import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const ActionButton = ({
  label,
  path,
  onClick,
  variant = "contained",
  width,
  fullWidth,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      fullWidth={fullWidth}
      disableElevation
      disableRipple
      sx={{
        display: "flex", // ← Corrected to flex (not block)
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // full Toolbar height
        minHeight: "inherit", // important
        width: width || "auto",
        padding: 0,
        borderRadius: 0,
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: variant === "contained" ? "#ffffff" : "primary.main",
        backgroundColor:
          variant === "contained" ? "primary.main" : "transparent",
        "&:hover": {
          backgroundColor: "#002d53",
          color: "#ffffff",
          boxShadow: "none",
        },
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
