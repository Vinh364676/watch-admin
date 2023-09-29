import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../../@types/product';

// ----------------------------------------------------------------------

const initialState: ProductState = {
  productCount: 0,
};

const slice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getListProduct.fulfilled, (state, action) => {
     
    // });
  },
});
export default slice.reducer;
