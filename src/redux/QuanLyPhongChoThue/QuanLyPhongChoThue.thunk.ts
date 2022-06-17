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
      }
    } catch (error) {
      console.log(error);
    }
  }
);
