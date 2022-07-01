import { http } from "../util/setting/config";

export class QuanLyNguoiDung {
  CapNhatAnhDaiDien = (data:any) => {
    return http.post("/api/users/upload-avatar", data);
  };
  LayThongTinChiTietNguoiDung = (id: string) => {
    return http.get(`/api/users/${id}`);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDung();
