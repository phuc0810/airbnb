import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ACCESSTOKEN,
  ThongTinDangKy,
  ThongTinDangNhap,
  User,
  USER_LOGIN,
} from "../../@types/XacThucNguoiDung/XacThucNguoiDung";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN) as string);
}

interface typeInitialState {
  thongTinDangNhap?: ThongTinDangNhap;
  alerLogin: boolean;
  userLogin?: User;
}

const initialState: typeInitialState = {
  alerLogin: false,
  userLogin: user,
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
      localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload.user));
      localStorage.setItem(ACCESSTOKEN, action.payload.token);
    },
  },
});
