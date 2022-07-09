import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyNguoiDungService } from "../../service/QuanLyNguoiDungService";
import { xacThucNguoiDungAction } from "../XacThucNguoiDung/XacThucNguoiDung.reducer";
import { quanLyNguoiDungAction } from "./QuanLyNguoiDung.reducer";

export const postCapNhatHinhDaiDien = createAsyncThunk(
  "QuanLyNguoiDung/postCapNhatHinhDaiDien",
  async (data: any, { dispatch }) => {
    try {
      const result = await quanLyNguoiDungService.CapNhatAnhDaiDien(data);
      if (result.status === 200) {
        // dispatch(quanLyNguoiDungAction.setAvatar(result.data.avatar));
        dispatch(xacThucNguoiDungAction.reloadAvatar(result.data));
        alert("cập nhật thành công");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getLayThongTinNguoiDung = createAsyncThunk(
  "QuanLyNguoiDung/getLayThongTinNguoiDung",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyNguoiDungService.LayThongTinChiTietNguoiDung(
        id
      );
      if (result.status === 200) {
        dispatch(quanLyNguoiDungAction.setThongTinNguoiDung(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);
