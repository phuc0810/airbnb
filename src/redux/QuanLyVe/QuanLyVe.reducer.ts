import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DanhSachViTri, NavList } from "../../@types/QuanLyVe/QuanLyVe";

interface typeInitialState {
  danhSachViTri?: DanhSachViTri[];
  navList?: NavList[];
}

const initialState: typeInitialState = {};

export const { reducer: quanLyVeReducer, actions: quanLyVeAction } =
  createSlice({
    name: "QuanLyVe",
    initialState,
    reducers: {
      setDanhSachViTri: (
        state,
        action: PayloadAction<DanhSachViTri[]>
      ) => {
        state.danhSachViTri = action.payload;
      },
      setNavList: (state, action: PayloadAction<NavList[]>) => {
        state.navList = action.payload;
      },
    },
  });
