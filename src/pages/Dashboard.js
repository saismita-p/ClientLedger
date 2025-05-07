import { Box, Grid, Typography, Button } from "@mui/material";
import CardItem from "../components/CardItem";
import TileItem from "../components/TileItem";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getClients } from "../store/clientThunks";
import { clearClientCache } from "../store/clientSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clients = useSelector((state) => state.clients.list);
  const count = clients?.Data?.Count ?? 0; // from slice
  const status = useSelector((state) => state.clients.status);
  const today = new Date().toLocaleDateString("en-GB");

  const tilesData = [
    {
      id: 1,
      title: "E-Trade",
      description: "Trading software",
      date: "20/04/2025",
    },
    {
      id: 2,
      title: "E-Pharm",
      description: "Pharmacy management",
      date: "22/04/2025",
    },
    {
      id: 3,
      title: "E-Cafe+",
      description: "Cafe Billing software",
      date: "26/04/2025",
    },
    {
      id: 4,
      title: "Chemist",
      description: "Medical Store",
      date: "24/04/2025",
    },
    {
      id: 5,
      title: "E-Auto",
      description: "Automobile Billing",
      date: "21/04/2025",
    },
  ];
  const handleProductRefresh = () => {
    console.log("Refreshing products...");
  };

  const handleProductShow = () => {
    navigate("/app/products");
  };

  const handleClientRefresh = () => {
    dispatch(clearClientCache());
    dispatch(getClients())
      .unwrap()
      .catch((err) => console.log("client fetch failed ", err));
  };

  const handleClientShow = () => {
    navigate("/app/clients");
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        px: 8,
        pt: 4,
      }}
    >
      {/* Cards Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={2.8}>
          <CardItem
            title="Products"
            value="450"
            date={today}
            path="/app/products"
            actions={[
              {
                label: "Refresh",
                onClick: () => console.log("Refresh clicked"),
              },
              { label: "Show", onClick: handleProductShow },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.8}>
          <CardItem
            title="Clients"
            value={count}
            date={today}
            path="/app/clients"
            actions={[
              {
                label: "Refresh",
                onClick: handleClientRefresh,
              },
              { label: "Show", onClick: handleClientShow },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.8}>
          <CardItem
            title="Renewal"
            value="200"
            date={today}
            actions={[
              {
                label: "Refresh",
                onClick: () => console.log("Refresh clicked"),
              },
              { label: "Show", onClick: () => console.log("Show clicked") },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.8}>
          <CardItem
            title="Lapsed"
            value="100"
            date={today}
            actions={[
              {
                label: "Refresh",
                onClick: handleProductRefresh,
              },
              { label: "Show", onClick: handleProductShow },
            ]}
          />
        </Grid>
      </Grid>

      {/* Products Section Title */}
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography
          variant="h5"
          sx={{
            color: "text.primary",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
            letterSpacing: "2px",
            borderBottom: "2px solid",
            borderColor: "secondary.main",
            display: "inline-block",
            pb: 0.5,
          }}
        >
          Lapsed
        </Typography>
      </Box>

      {/* Scrollable Tiles Section */}
      <Box
        sx={{
          maxHeight: "calc(100vh - 220px)", // decreased reserved header space
          overflowY: "auto",
          backgroundColor: "background.paper",
          borderRadius: 2,
          p: 2,
          pb: 6,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box sx={{ pb: 8 }}>
          {tilesData.map((tile, index) => (
            <TileItem
              key={tile.id}
              data={tile}
              onEdit={() => console.log("Edit clicked")}
              onDelete={() => console.log("Delete clicked")}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
