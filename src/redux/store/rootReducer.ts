import { combineReducers } from "redux";
import { quanLyDanhGiaReducer } from "../QuanLyDanhGia/QuanLyDanhGia.reducer";
import { quanLyPhongChoThueReducer } from "../QuanLyPhongChoThue/QuanLyPhongChoThue.reducer";
import { quanLyVeReducer } from "../QuanLyVe/QuanLyVe.reducer";

export const rootReducer = combineReducers({
  // reducer redux
  quanLyVeReducer,
  quanLyPhongChoThueReducer,
  quanLyDanhGiaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
