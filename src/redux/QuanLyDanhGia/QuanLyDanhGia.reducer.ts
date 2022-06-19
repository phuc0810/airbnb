import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { roomIsRated } from "../../@types/QuanLyDanhGia/QuanLyDanhGia";

interface typeInitialState {
  roomIsRated?: roomIsRated[];
}

const initialState: typeInitialState = {};

export const { reducer: quanLyDanhGiaReducer, actions: quanLyDanhGiaAction } =
  createSlice({
    name: "QuanLyDanhGia",
    initialState,
    reducers: {
      setRoomIsRate: (state, action: PayloadAction<roomIsRated[]>) => {
        state.roomIsRated = action.payload;
      },
    },
  });
