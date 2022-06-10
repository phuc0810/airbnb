import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyVeService } from "../../service/QuanLyVeService";
import { http } from "../../util/setting/config";
import { quanLyVeAction } from "./QuanLyVe.reducer";

export const getThongTinChiTietVe = createAsyncThunk(
  "QuanLyVe/getThongTinChiTietVe",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyVeService.layThongTinChiTietVe();
      if (result.status === 200) {
        dispatch(quanLyVeAction.setThongTinChiTietVe(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);
