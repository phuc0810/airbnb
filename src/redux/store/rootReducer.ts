import { combineReducers } from "redux";
import { quanLyDanhGiaReducer } from "../QuanLyDanhGia/QuanLyDanhGia.reducer";
import { quanLyPhongChoThueReducer } from "../QuanLyPhongChoThue/QuanLyPhongChoThue.reducer";
import { quanLyVeReducer } from "../QuanLyVe/QuanLyVe.reducer";
import { xacThucNguoiDungReducer } from "../XacThucNguoiDung/XacThucNguoiDung.reducer";

export const rootReducer = combineReducers({
  // reducer redux
  quanLyVeReducer,
  quanLyPhongChoThueReducer,
  quanLyDanhGiaReducer,
  xacThucNguoiDungReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
