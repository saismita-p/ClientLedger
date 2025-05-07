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

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "E-Pharm",
      description: "Pharmacy management",
      date: "22/04/2025",
    },
    {
      id: 2,
      title: "E-Cafe+",
      description: "Cafe Billing software",
      date: "26/04/2025",
    },
    {
      id: 3,
      title: "Chemist",
      description: "Medical Store Billing",
      date: "24/04/2025",
    },
    {
      id: 4,
      title: "E-Auto",
      description: "Automobile Software",
      date: "28/04/2025",
    },
  ]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "dateAsc") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOption === "dateDesc") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  const handleEdit = (id) => {
    console.log("Editing Product ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Deleting Product ID:", id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleAddProduct = () => {
    console.log("Adding new product...");
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
          Products
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
            placeholder="Search Products"
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
          label="Add Product"
          onClick={handleAddProduct}
          variant="contained"
          width="150px"
        />
      </Box>

      {/* --- Product Tiles Section --- */}
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
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <TileItem
              data={{
                ClientID: "CL1234",
                Name: "John Doe",
                Contact: "Manager",
                Addr1: "123 Main St",
                Addr2: "Suite 400",
                City: "New York",
                State: "NY",
                Pincode: "10001",
                Mobile: "1234567890",
                Email: "john@example.com",
                GSTIN: "22ABCDE1234F2Z5",
                DOJ: "2023-04-15T00:00:00Z",
              }}
              onEdit={() => handleEdit(product.id)}
              onDelete={() => handleDelete(product.id)}
            />
          ))
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mt: 4 }}
          >
            No Products Found
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductsPage;
