import { createAsyncThunk } from "@reduxjs/toolkit";
import { xacThucNguoiDungService } from "../../service/XacThucNguoiDungService";
import { xacThucNguoiDungAction } from "./XacThucNguoiDung.reducer";

export const postDangNhap = createAsyncThunk(
  "XacThucNguoiDung/postDangNhap",
  async (values: { email: string; password: string }, { dispatch }) => {
    try {
      const result = await xacThucNguoiDungService.DangNhap(values);
      console.log(result);
      if (result.status === 200) {
        dispatch(xacThucNguoiDungAction.setThongTinDangNhap(result.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(xacThucNguoiDungAction.changeAlertLogin(true));
    }
  }
);
