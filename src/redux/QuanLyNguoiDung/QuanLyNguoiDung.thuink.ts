import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormAddNguoiDung } from "../../@types/QuanLyNguoiDung/QuanLyNguoiDung";
import { quanLyNguoiDungService } from "../../service/QuanLyNguoiDungService";
import { RootState } from "../store/rootReducer";
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

export const getLayDanhSachNguoiDung = createAsyncThunk(
  "QuanLyNguoiDung/getLayDanhSachNguoiDung",
  async (params, { dispatch, getState }) => {
    const state = getState() as RootState;
    const { page, limit } = state.quanLyNguoiDungReducer.filter;
    try {
      const result = await quanLyNguoiDungService.LayDanhSachNguoiDung(
        page,
        limit
      );
      if (result.status === 200) {
        dispatch(quanLyNguoiDungAction.setDanhSachNguoiDung(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const postTaoNguoiDung = createAsyncThunk(
  "QuanLyNguoiDung/postTaoNguoiDung",
  async (formAddNguoiDung: FormAddNguoiDung, { dispatch }) => {
    try {
      const result = await quanLyNguoiDungService.TaoNguoiDung(
        formAddNguoiDung
      );
      alert("add thanh cong");
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteNguoiDung = createAsyncThunk(
  "QuanLyNguoiDung/deleteNguoiDung",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyNguoiDungService.XoaNguoiDung(id);
      if (result.status === 200) {
        alert("xóa thành công");
        dispatch(getLayDanhSachNguoiDung());
      }
    } catch (error) {
      console.log(error);
    }
  }
);
