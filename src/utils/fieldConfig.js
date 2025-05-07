import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
export const productFieldConfig = [
  { key: "ProductName", isTitle: true },
  { key: "Category" },
  { key: "Price", label: "₹", prefix: true },
  { key: "Stock" },
];

export const clientFieldConfig = [
  { key: "Name", isTitle: true },
  { key: "Addr1" },
  { key: "Addr2" },
  { key: "CityState", compute: (data) => `${data.City}, ${data.State}` },
  { key: "Pincode" },
  { key: "Mobile", icon: <PhoneIcon fontSize="small" /> },
  { key: "Email", icon: <EmailIcon fontSize="small" /> },
  { key: "DOJ" },
  { key: "GSTIN" },
];
