import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getproduct: (state, action) => {
      state.products = action.payload
    },
    deleteproduct: (state, action) => {
      state.products.splice(action.payload, 1);
    }
  }
})


export default productSlice.reducer

export const { getproduct, deleteproduct } = productSlice.actions