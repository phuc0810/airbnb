import { payloadUpdateLocation, ViTri } from "../@types/QuanLyVe/QuanLyVe";
import { newLocation } from "../@types/QuanLyViTri/QuanLyViTri";
import { http } from "../util/setting/config";

export class QuanLyViTri {
  LayDanhSachViTri = (page: number, limit: number) => {
    return http.get(`/api/locations?skip=${page * limit}&limit=${limit}`);
  };
  TaoViTri = (newLocations: newLocation) => {
    return http.post("/api/locations", newLocations);
  };
  XoaViTri = (id: string) => {
    return http.delete(`/api/locations/${id}`);
  };
  LayThongTinChiTietViTri = (id: string) => {
    return http.get(`/api/locations/${id}`);
  };
  CapNhatThongTinViTri = (
    id: string,
    updateLocation: payloadUpdateLocation
  ) => {
    return http.put(`/api/locations/${id}`, updateLocation);
  };
}

export const quanLyViTriService = new QuanLyViTri();
