import { Card, CardContent, Typography, Box } from "@mui/material";
import ActionButton from "../components/ActionButton";
import { useNavigate } from "react-router";

const CardItem = ({ title, value, date, actions = [], path }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        minWidth: 250,
        minHeight: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        borderRadius: 2,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        backgroundColor: "#ffffff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: path ? "pointer" : "default", // cursor pointer only if path is given
        "&:hover": {
          transform: path ? "scale(1.03)" : "none",
          boxShadow: path
            ? "0px 10px 20px rgba(0,0,0,0.25)"
            : "0px 5px 15px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        {value && (
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {value}
          </Typography>
        )}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "2px",
            mt: 1,
          }}
        >
          {title}
        </Typography>
        {date && (
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontFamily: "Montserrat, sans-serif",
              mt: 1,
            }}
          >
            {date}
          </Typography>
        )}
      </CardContent>

      {/* Dynamic Buttons */}
      {actions.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            mt: 2,
            width: "100%",
          }}
          onClick={(e) => e.stopPropagation()} // <--- Important: prevent Card click when clicking button
        >
          {actions.map((action, index) => (
            <ActionButton
              key={index}
              label={action.label}
              onClick={action.onClick}
              variant={action.variant || "text"}
              fullWidth
              width={action.width || "auto"}
            />
          ))}
        </Box>
      )}
    </Card>
  );
};

export default CardItem;
