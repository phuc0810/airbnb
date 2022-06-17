import { combineReducers } from "redux";
import { quanLyPhongChoThueReducer } from "../QuanLyPhongChoThue/QuanLyPhongChoThue.reducer";
import { quanLyVeReducer } from "../QuanLyVe/QuanLyVe.reducer";

export const rootReducer = combineReducers({
  // reducer redux
  quanLyVeReducer,
  quanLyPhongChoThueReducer
});

export type RootState = ReturnType<typeof rootReducer>;
