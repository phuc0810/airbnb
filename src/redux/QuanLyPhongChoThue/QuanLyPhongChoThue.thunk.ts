import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhongChothue } from "../../service/QuanLyPhongChoThue";
import { quanLyPhongChoThueAction } from "./QuanLyPhongChoThue.reducer";

export const getHotelList = createAsyncThunk(
  "QuanLyPhongChoThue/getHotelList",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyPhongChothue.LayDanhSachPhongChoThue();
      if (result.status === 200) {
        dispatch(quanLyPhongChoThueAction.setHotelList(result.data));
        await dispatch(quanLyPhongChoThueAction.setIsLoading(true));
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
