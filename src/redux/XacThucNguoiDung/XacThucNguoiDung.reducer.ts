import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ACCESSTOKEN,
  ThongTinDangKy,
  ThongTinDangNhap,
  UserInfo,
  USER_LOGIN,
} from "../../@types/XacThucNguoiDung/XacThucNguoiDung";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN) as string);
}

interface typeInitialState {
  thongTinDangNhap?: ThongTinDangNhap;
  alerLogin: boolean;
  userLogin?: UserInfo;
  imgAvatar?: string;
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
      state.userLogin = action.payload.user;
      state.imgAvatar = state.userLogin.avatar;
      localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload.user));
      localStorage.setItem(ACCESSTOKEN, action.payload.token);
    },
    reloadAvatar: (state, action: PayloadAction<string>) => {
      state.imgAvatar = action.payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
    },
  },
});
