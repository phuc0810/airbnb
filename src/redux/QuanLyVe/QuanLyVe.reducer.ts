import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DanhSachViTri, NavList, ViTri } from "../../@types/QuanLyVe/QuanLyVe";

interface typeInitialState {
  danhSachViTri?: DanhSachViTri[];
  navList?: NavList[];
  viTri?: ViTri;
  LoadingMenuBar: boolean;
}

const initialState: typeInitialState = {
  LoadingMenuBar: false,
};

export const { reducer: quanLyVeReducer, actions: quanLyVeAction } =
  createSlice({
    name: "QuanLyVe",
    initialState,
    reducers: {
      danhSachViTri: (state, action: PayloadAction<DanhSachViTri[]>) => {
        state.danhSachViTri = action.payload;
      },
      setNavList: (state, action: PayloadAction<NavList[]>) => {
        state.navList = action.payload;
        state.LoadingMenuBar = true;
      },
      setViTri: (state, action: PayloadAction<ViTri>) => {
        state.viTri = action.payload;
      },
    },
  });
