import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViTri } from "../../@types/QuanLyVe/QuanLyVe";

interface typeInitialState {
  filter: {
    page: number;
    limit: number;
  };
  danhSachViTri?: ViTri[];
  changeSnackbar?: boolean;
  thongTinChiTietViTri?: ViTri | null;
}

const initialState: typeInitialState = {
  filter: {
    page: 0,
    limit: 6,
  },
  changeSnackbar: true,
};

export const { reducer: quanLyViTriReducer, actions: quanLyViTriAction } =
  createSlice({
    name: "QuanLyViTri",
    initialState,
    reducers: {
      setDanhSachViTri: (state, action: PayloadAction<ViTri[]>) => {
        state.danhSachViTri = action.payload;
      },
      updateFilter: (
        state,
        action: PayloadAction<{ key: string; value: any }>
      ) => {
        const { key, value } = action.payload;
        console.log({ key, value });
        state.filter = { ...state.filter, [key]: value };
      },
      setChangeSnackbar: (
        state,
        action: PayloadAction<boolean | undefined>
      ) => {
        state.changeSnackbar = action.payload;
      },
      setThongTinChiTietViTri: (state, action: PayloadAction<ViTri | null>) => {
        state.thongTinChiTietViTri = action.payload;
      },
    },
  });
