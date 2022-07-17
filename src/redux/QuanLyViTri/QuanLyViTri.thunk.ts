import { createAsyncThunk } from "@reduxjs/toolkit";
import { payloadUpdateLocation, ViTri } from "../../@types/QuanLyVe/QuanLyVe";
import { newLocation } from "../../@types/QuanLyViTri/QuanLyViTri";
import { quanLyViTriService } from "../../service/QuanLyViTriService";
import { RootState } from "../store/rootReducer";
import { quanLyViTriAction } from "./QuanLyViTri.reducer";

export const getDanhSachViTriAdmin = createAsyncThunk(
  "QuanLyViTri/getDanhSachViTri",
  async (params, { dispatch, getState }) => {
    try {
      const state = getState() as RootState;
      const { limit, page } = state.quanLyViTriReducer.filter;
      const result = await quanLyViTriService.LayDanhSachViTri(page, limit);
      if (result.status === 200) {
        dispatch(quanLyViTriAction.setDanhSachViTri(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const postAddLocation = createAsyncThunk(
  "QuanLyViTri/postAddLocation",
  async (newLocation: newLocation, { dispatch }) => {
    try {
      const result = await quanLyViTriService.TaoViTri(newLocation);
      if (result.status === 200) {
        dispatch(quanLyViTriAction.setChangeSnackbar(true));
        dispatch(getDanhSachViTriAdmin());
      } else {
        dispatch(quanLyViTriAction.setChangeSnackbar(false));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteLocation = createAsyncThunk(
  "QuanLyViTri/deleteLocation",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyViTriService.XoaViTri(id);
      if (result.status === 200) {
        alert("xóa thành công");
        dispatch(getDanhSachViTriAdmin());
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getChiTietViTri = createAsyncThunk(
  "QuanLyViTri/getChiTietViTri",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyViTriService.LayThongTinChiTietViTri(id);
      if (result.status === 200) {
        dispatch(quanLyViTriAction.setThongTinChiTietViTri(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const putUpdateLocation = createAsyncThunk(
  "QuanLyViTri/putUpdateLocation",
  async (
    payload: { values: payloadUpdateLocation; id: string },
    { dispatch }
  ) => {
    try {
      const result = await quanLyViTriService.CapNhatThongTinViTri(
        payload.id,
        payload.values
      );
      if (result.status === 200) {
        alert("update thành công ");
        dispatch(getDanhSachViTriAdmin());
      }
    } catch (error) {
      console.log(error);
    }
  }
);
