import { createSlice } from "@reduxjs/toolkit";
import { getClients } from "./clientThunks";

const clientSlice = createSlice({
  name: "clients",
  initialState: {
    list: null,
    status: "idle", //idle | loading | succeeded | failed
    error: null,
    lastFetched: null,
  },
  reducers: {
    clearClientCache(state) {
      state.list = null;
      state.lastFetched = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
        state.lastFetched = Date.now(); //for fetching/refreshing cached data
      })
      .addCase(getClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearClientCache } = clientSlice.actions;
export default clientSlice.reducer;
