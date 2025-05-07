import React from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const greyText = "#555";

const TileItem = ({ data, fieldConfig = null, onEdit, onDelete }) => {
  const entries = fieldConfig
    ? fieldConfig
        .map((field) => {
          const value = field.compute ? field.compute(data) : data[field.key];
          return { ...field, value };
        })
        .filter((f) => f.value != null)
    : Object.entries(data).map(([key, value]) => ({
        key,
        value,
      }));

  return (
    <Card sx={{ mb: 2, border: "1px solid #ccc", borderRadius: "8px" }}>
      <CardContent>
        {/* Title */}
        {entries
          .filter((f) => f.isTitle)
          .map((f, i) => (
            <Typography
              key={`title-${i}`}
              variant="h6"
              fontWeight="bold"
              color="black"
              sx={{ mb: 2 }}
            >
              {f.value}
            </Typography>
          ))}

        {/* Content in 3 columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on mobile
              sm: "1fr 1fr", // 2 columns on tablets
              md: "1fr 1fr 1fr", // 3 columns on desktop
            },
            gap: 2,
          }}
        >
          {entries
            .filter((f) => !f.isTitle)
            .map((field, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: greyText,
                  wordBreak: "break-word",
                }}
              >
                {field.icon && field.icon}
                <Typography variant="body2">{field.value}</Typography>
              </Box>
            ))}
        </Box>

        {/* Action buttons */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <IconButton onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TileItem;
