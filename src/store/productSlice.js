import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    // setProducts: (state, action)=> {
    //     state.products = action.payload;
    // },
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
    updateProducts: (state, action) => {
      const idx = state.products.findIndex((p) => {
        p.id === action.payload.id;
      });
      if (idx !== -1) {
        state.products[idx] = action.payload;
      }
    },

    deleteProducts: () => {
      state.products = state.products.filter(
        (p) => !action.payload.includes(p.id)
      );
    },
  },
});

export const { addProducts, updateProducts, deleteProducts } =
  productSlice.actions;
export default productSlice.reducer;
