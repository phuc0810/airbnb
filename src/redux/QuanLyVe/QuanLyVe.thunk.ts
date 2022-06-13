import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { quanLyVeService } from "../../service/QuanLyVeService";
import { quanLyVeAction } from "./QuanLyVe.reducer";

export const getDanhSachViTri = createAsyncThunk(
  "QuanLyVe/getThongTinChiTietVe",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyVeService.LayDanhSachViTri();
      if (result.status === 200) {
        dispatch(quanLyVeAction.setDanhSachViTri(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const getNavList = createAsyncThunk(
  "QuanLyVe/getNavList",
  async (params, { dispatch }) => {
    try {
      const result = await axios.get(
        "https://62a5d354b9b74f766a3fe474.mockapi.io/navBarRoomList"
      );
      dispatch(quanLyVeAction.setNavList(result.data));
    } catch (error) {
      console.log(error);
    }
  }
);
