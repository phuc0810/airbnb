import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  NguoiDung,
  ThongTinNguoiDung,
} from "../../@types/QuanLyNguoiDung/QuanLyNguoiDung";

interface typeInitialState {
  Avatar?: any;
  thongTinNguoiDung?: ThongTinNguoiDung;
  danhSachNguoiDung?: NguoiDung[];
  filter: {
    page: number;
    limit: number;
  };
}

const initialState: typeInitialState = {
  filter: {
    page: 0,
    limit: 6,
  },
};

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
    setDanhSachNguoiDung: (state, action: PayloadAction<NguoiDung[]>) => {
      state.danhSachNguoiDung = action.payload;
    },
    updateFilter: (
      state,
      action: PayloadAction<{ key: string; value: any }>
    ) => {
      const { key, value } = action.payload;
      state.filter = { ...state.filter, [key]: value };
    },
  },
});
