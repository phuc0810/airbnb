import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThongTinNguoiDung } from "../../@types/QuanLyNguoiDung/QuanLyNguoiDung";

interface typeInitialState {
  Avatar?: any;
  thongTinNguoiDung?: ThongTinNguoiDung;
}

const initialState: typeInitialState = {};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungAction,
} = createSlice({
  name: "QuanLyNguoiDung",
  initialState,
  reducers: {
    setAvatar: (state, action: PayloadAction<any>) => {
      state.Avatar = action.payload;
    },
    setThongTinNguoiDung: (state, action: PayloadAction<ThongTinNguoiDung>) => {
      state.thongTinNguoiDung = action.payload;
    },
  },
});
