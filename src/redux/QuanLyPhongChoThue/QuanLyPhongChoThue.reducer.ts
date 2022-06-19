import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  hotelList,
  ReviewRoom,
} from "../../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";

interface typeInitialState {
  hotelList?: hotelList[];
  reviewRoom?: ReviewRoom;
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
    setReviewRoom: (state, action: PayloadAction<ReviewRoom>) => {
      state.reviewRoom = action.payload;
    },
  },
});
