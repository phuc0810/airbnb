import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  NewRoom,
  PhongDat,
  UpdateRoom,
} from "../../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";
import { quanLyPhongChothue } from "../../service/QuanLyPhongChoThue";
import { RootState } from "../store/rootReducer";
import { quanLyPhongChoThueAction } from "./QuanLyPhongChoThue.reducer";

export const getHotelList = createAsyncThunk(
  "QuanLyPhongChoThue/getHotelList",
  async (params, { dispatch, getState }) => {
    const state = getState() as RootState;
    const { page, limit, locationId } = state.quanLyPhongChoThueReducer.filter;
    try {
      const result = await quanLyPhongChothue.LayDanhSachPhongChoThue(
        page,
        limit,
        locationId
      );
      if (result.status === 200) {
        dispatch(quanLyPhongChoThueAction.setHotelList(result.data));
        // await dispatch(quanLyPhongChoThueAction.setIsLoading(true));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getReviewRoom = createAsyncThunk(
  "QuanLyPhongChoThue/getReviewRoom",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyPhongChothue.LayReviewRoom(id);
      if (result.status === 200) {
        dispatch(quanLyPhongChoThueAction.setReviewRoom(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const paginateHotelList = createAsyncThunk(
  "QuanLyPhongChoThue/paginateHotelList",
  async (soTrang: any, { dispatch }) => {
    console.log(soTrang);

    try {
      const result = await quanLyPhongChothue.DanhSachPhongPhongChoThuePaginate(
        soTrang
      );
      if (result.status === 200) {
        dispatch(quanLyPhongChoThueAction.changeHotelList(result.data));
        // await dispatch(quanLyPhongChoThueAction.setIsLoading(true));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const postDatPhong = createAsyncThunk(
  "QuanLyPhongChoThue/postDatPhong",
  async (phongDat: PhongDat, { dispatch }) => {
    try {
      const result = await quanLyPhongChothue.DatPhong(phongDat);
      if (result.status === 200) {
        dispatch(quanLyPhongChoThueAction.changeSnackbar(true));
      }
    } catch (error) {
      console.log(error);
      dispatch(quanLyPhongChoThueAction.changeSnackbar(false));
    }
  }
);

export const getHotelListAdmin = createAsyncThunk(
  "QuanLyPhongChoThue/getHotelListAdmin",
  async (params, { dispatch, getState }) => {
    const state = getState() as RootState;
    const { limitAdmin, pageAdmin } =
      state.quanLyPhongChoThueReducer.filterAdmin;
    try {
      const result = await quanLyPhongChothue.LayDanhSachPhongChoThueAdmin(
        pageAdmin,
        limitAdmin
      );
      if (result.status === 200) {
        dispatch(quanLyPhongChoThueAction.setHotelListAdmin(result.data));
        // await dispatch(quanLyPhongChoThueAction.setIsLoading(true));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const postNewRoom = createAsyncThunk(
  "QuanLyPhongChoThue/postNewRoom",
  async (newRoom: NewRoom, { dispatch }) => {
    try {
      const result = await quanLyPhongChothue.TaoPhongChoThue(newRoom);
      if (result.status === 200) {
        alert("thêm thành công");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePhongChoThue = createAsyncThunk(
  "QuanLyPhongChoThue/deletePhongChoThue",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyPhongChothue.XoaPhongChoThue(id);
      if (result.status === 200) {
        alert("xóa thành công");
        dispatch(getHotelListAdmin());
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getThongTinChiTietPhong = createAsyncThunk(
  "QuanLyPhongChoThue/getThongTinChiTietPhong",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyPhongChothue.LayThongTinChiTietPhong(id);
      if (result.status === 200) {
        dispatch(quanLyPhongChoThueAction.setThongTinChiTietPhong(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const putUpdatePhong = createAsyncThunk(
  "QuanLyPhongChoThue/putUpdatePhong",
  async (payload: { values: UpdateRoom; id: string }, { dispatch }) => {
    try {
      const result = await quanLyPhongChothue.CapNhatPhong(payload.id,payload.values);
      if (result.status === 200) {
        alert("cap nhat thanh cong");
        dispatch(getHotelListAdmin());
      }
    } catch (error) {
      console.log(error);
    }
  }
);
