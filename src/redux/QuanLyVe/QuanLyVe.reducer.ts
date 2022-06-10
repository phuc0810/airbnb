import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThongTinChiTietVe } from "../../@types/QuanLyVe/QuanLyVe";

interface typeInitialState {
  thongTinChiTietVe?: ThongTinChiTietVe[];
}

const initialState: typeInitialState = {};

export const { reducer: quanLyVeReducer, actions: quanLyVeAction } =
  createSlice({
    name: "QuanLyVe",
    initialState,
    reducers: {
      setThongTinChiTietVe: (
        state,
        action: PayloadAction<ThongTinChiTietVe[]>
      ) => {
        state.thongTinChiTietVe = action.payload;
      },
    },
  });
