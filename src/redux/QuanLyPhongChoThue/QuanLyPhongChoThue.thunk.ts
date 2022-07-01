import { createAsyncThunk } from "@reduxjs/toolkit";
import { PhongDat } from "../../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";
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
        alert('đặt phòng thành công')
      }
    } catch (error) {
      console.log(error);
    }
  }
);
