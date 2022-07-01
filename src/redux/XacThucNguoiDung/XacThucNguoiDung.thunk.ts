import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
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
    }
  }
);
export const postDangKy = createAsyncThunk(
  "XacThucNguoiDung/postDangKy",
  async (
    formData: {
      name: string;
      email: string;
      password: string;
      phone: string;
      birthday: string;
      gender: boolean;
      address: string;
    },
    { dispatch }
  ) => {
    try {
      const result = await xacThucNguoiDungService.DangKy(formData);
      console.log(result);
      if (result.status === 200) {
        alert("Đăng ký Thành Công");
      }
    } catch (error) {
      console.log(error);
    }
  }
);
