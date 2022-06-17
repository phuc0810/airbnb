import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hotelList } from "../../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";

interface typeInitialState {
  hotelList?: hotelList[];
}

const initialState: typeInitialState = {};

export const {
  reducer: quanLyPhongChoThueReducer,
  actions: quanLyPhongChoThueAction,
} = createSlice({
  name: "QuanLyPhongChoThue",
  initialState,
  reducers: {
    setHotelList: (state, action: PayloadAction<hotelList[]>) => {
      state.hotelList = action.payload;
    },
  },
});
