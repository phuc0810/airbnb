import { combineReducers } from "redux";
import { quanLyVeReducer } from "../QuanLyVe/QuanLyVe.reducer";

export const rootReducer = combineReducers({
  // reducer redux
  quanLyVeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
