import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDanhGia } from "../../service/QuanLyDanhGiaService";
import { quanLyDanhGiaAction } from "./QuanLyDanhGia.reducer";

export const getLayDanhSachDanhGiaTheoPhong = createAsyncThunk(
  "QuanLyDanhGia/getLayDanhSachDanhGiaTheoPhong",
  async (id: string, { dispatch }) => {
    try {
      const result = await quanLyDanhGia.LayDanhSachDanhGiaTheoPhong(id);
      if(result.status===200){
        dispatch(quanLyDanhGiaAction.setRoomIsRate(result.data))
      }
    } catch (error) {
      console.log(error);
    }
  }
);
