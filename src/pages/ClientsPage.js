import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ActionButton from "../components/ActionButton";
import TileItem from "../components/TileItem";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClients } from "../store/clientThunks";
import { clearClientCache } from "../store/clientSlice";
import { clientFieldConfig } from "../utils/fieldConfig";
import CONSTANTS from "../utils/CONSTANTS";

const ClientsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const clients = useSelector((state) => state.clients.list);
  const status = useSelector((state) => state.clients.status);
  const error = useSelector((state) => state.clients.error);

  const clientsList = clients?.Data?.MonthlyData || [];

  const filteredClients = clientsList.filter((client) => {
    if (searchTerm !== "") {
      return client.name?.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const sortedClients = [...filteredClients].sort((a, b) => {
    if (sortOption === "dateAsc") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOption === "dateDesc") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  const handleEdit = (id) => {
    console.log("Editing Client ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Deleting Client ID:", id);
    setClientsList((prev) => prev.filter((client) => client.id !== id));
  };

  const handleAddClient = () => {
    console.log("Adding new client...");
  };

  const handleBack = () => {
    navigate("/app/dashboard");
  };

  return (
    <Box
      sx={{ minHeight: "100vh", backgroundColor: "background.default", p: 4 }}
    >
      {/* --- Top Bar with IconButton --- */}
      <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton onClick={handleBack} sx={{ color: "primary.main" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: "2px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Clients
        </Typography>
      </Box>

      {/* --- Action Section (Search, Sort, Add) --- */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" gap={2} flexWrap="wrap">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search Clients"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ minWidth: 200, fontFamily: "Montserrat, sans-serif" }}
          />

          <Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            displayEmpty
            size="small"
            sx={{ minWidth: 150, fontFamily: "Montserrat, sans-serif" }}
          >
            <MenuItem value="">Sort By</MenuItem>
            <MenuItem value="dateAsc">Date Ascending</MenuItem>
            <MenuItem value="dateDesc">Date Descending</MenuItem>
          </Select>
        </Box>

        <ActionButton
          label="Add Client"
          onClick={handleAddClient}
          variant="contained"
          width="150px"
        />
      </Box>

      {/* --- Client Tiles Section --- */}
      <Box
        sx={{
          maxHeight: "calc(100vh - 280px)",
          overflowY: "auto",
          backgroundColor: "background.paper",
          borderRadius: 2,
          p: 2,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {sortedClients.length > 0 ? (
          sortedClients.map((client) => (
            <TileItem
              key={client.Mobile}
              fieldConfig={clientFieldConfig}
              data={client}
              onEdit={() => handleEdit(client.ClientID)}
              onDelete={() => handleDelete(client.ClientID)}
            />
          ))
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mt: 4 }}
          >
            {!clients?.Data && CONSTANTS.No_Data_Text}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ClientsPage;
