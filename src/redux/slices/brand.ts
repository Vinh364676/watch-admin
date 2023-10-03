import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrandState } from "../../@types/brand";
import brandService from "../../services/brand/brand.service";


export const getBrand = createAsyncThunk(
    "get/getBrand",
    async (params: any) => {
      const { data } = await brandService.get(params);
      return data;
    }
  );
//   export const getOneEvent = createAsyncThunk(
//     "get/getOneEvent",
//     async (id: any) => {
//       const { data } = await eventService.getOne(id);
//       return data;
//     }
//   );
  const initialState: BrandState = {
    brand: [],
  };
  const slice = createSlice({
    name: "Brand",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getBrand.fulfilled, (state, action) => {
          state.brand = action.payload.items;
        });   
    },
  });
  export default slice.reducer;
  