import { http } from "../util/setting/config";

export class QuanLyNguoiDung {
  CapNhatAnhDaiDien = (data: any) => {
    return http.post("/api/users/upload-avatar", data);
  };
  LayThongTinChiTietNguoiDung = (id: string) => {
    return http.get(`/api/users/${id}`);
  };
  LayDanhSachNguoiDung = (page: number, limit: number) => {
    return http.get(
      `/api/users/pagination?skip=${page * limit}&limit=${limit}`
    );
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDung();
