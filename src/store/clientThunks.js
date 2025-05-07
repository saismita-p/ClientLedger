import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllClients } from "../services/clientService";

export const getClients = createAsyncThunk("clients/getClients", async () => {
  const data = await fetchAllClients();
  return data;
});
