import {
  NewRoom,
  PhongDat,
  UpdateRoom,
} from "../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";
import { http } from "../util/setting/config";

export class QuanLyPhongChoThue {
  LayDanhSachPhongChoThue = (
    page: number,
    limit: number,
    locationId: string
  ) => {
    return http.get(
      `/api/rooms?skip=${page * limit}&limit=${limit}&locationId=${locationId}`
    );
  };
  LayReviewRoom = (id: string) => {
    return http.get(`/api/rooms/${id}`);
  };
  DanhSachPhongPhongChoThuePaginate = (soTrang: any) => {
    return http.get(`/api/rooms?skip=${soTrang * 22}&limit=22`);
  };
  DatPhong = (phongDat: PhongDat) => {
    return http.post("/api/rooms/booking", phongDat);
  };
  LayDanhSachPhongChoThueAdmin = (pageAdmin: number, limitAdmin: number) => {
    return http.get(
      `/api/rooms?skip=${pageAdmin * limitAdmin}&limit=${limitAdmin}`
    );
  };
  TaoPhongChoThue = (newRoom: NewRoom) => {
    return http.post("/api/rooms", newRoom);
  };
  XoaPhongChoThue = (id: string) => {
    return http.delete(`/api/rooms/${id}`);
  };
  LayThongTinChiTietPhong = (id: string) => {
    return http.get(`/api/rooms/${id}`);
  };
  CapNhatPhong = (id: string, values: UpdateRoom) => {
    return http.put(`/api/rooms/${id}`, values);
  };
}

export const quanLyPhongChothue = new QuanLyPhongChoThue();
