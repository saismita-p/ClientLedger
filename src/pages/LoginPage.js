import { useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authservice";
import InputField from "../components/InputField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import ActionButton from "../components/ActionButton";
import Avatar from "@mui/material/Avatar";

const LoginPage = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error when typing
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!formData.username && !formData.password) {
      setError("Please enter username and password.");
      return;
    }
    if (login(formData)) {
      sessionStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/app/dashboard");
    } else {
      setError("Invalid credentials. Please check your username and password.");
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Side: Form (40%) */}
      <Grid
        item
        xs={12}
        md={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ flexBasis: "40%" }} // Force 40% width
      >
        <Box width="80%" maxWidth={400}>
          <Typography variant="h5" gutterBottom>
            Log In
          </Typography>
          <InputField
            name="username"
            value={formData.username}
            onChange={handleChange}
            validationKey="name"
            required
            startIcon={<AccountCircleIcon />}
          />
          <InputField
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            type="password"
            startIcon={<LockIcon />}
          />
          {/* Button + Error message together inside a Box */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%", // full container width
            }}
          >
            <ActionButton label="Log In" onClick={handleSubmit} width="40%" />

            {/* Reserve space for error message */}
            <Box sx={{ height: "24px" }}>
              {error && (
                <Typography variant="body2" color="error" align="center">
                  {error}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Right Side: Logo + Text (60%) */}
      <Grid
        item
        xs={false}
        md={7}
        sx={{
          position: "relative",
          flexBasis: "60%", // Force 60% width
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          px: 4,
        }}
      >
        {/* Half Height Vertical Line */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "25%", // center vertically
            height: "50%", // half height
            width: "1px",
            backgroundColor: "#ccc",
          }}
        />

        <Box
          sx={{
            width: 200,
            height: 120,
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Avatar alt="Remy Sharp" src="./public/images/home.png" />

          {/* Placeholder for image */}
        </Box>
        <img src="home.png" alt="Home" />
        <Typography variant="h6" textAlign="center">
          Trident's Softwares
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
