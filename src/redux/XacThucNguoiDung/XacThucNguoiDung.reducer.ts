import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ACCESSTOKEN,
  ThongTinDangKy,
  ThongTinDangNhap,
  USER_LOGIN,
} from "../../@types/XacThucNguoiDung/XacThucNguoiDung";

interface typeInitialState {
  thongTinDangNhap?: ThongTinDangNhap;
  alerLogin: boolean;
}

const initialState: typeInitialState = {
  alerLogin: false,
};
export const {
  reducer: xacThucNguoiDungReducer,
  actions: xacThucNguoiDungAction,
} = createSlice({
  name: "XacThucNguoiDung",
  initialState,
  reducers: {
    setThongTinDangNhap: (state, action: PayloadAction<ThongTinDangNhap>) => {
      state.thongTinDangNhap = action.payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(state.thongTinDangNhap));
      localStorage.setItem(ACCESSTOKEN, state.thongTinDangNhap.token);
    },
  },
});
