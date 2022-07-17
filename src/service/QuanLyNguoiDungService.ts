import { FormAddNguoiDung } from "../@types/QuanLyNguoiDung/QuanLyNguoiDung";
import { updateUser } from "../redux/QuanLyNguoiDung/QuanLyNguoiDung.thuink";
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
  TaoNguoiDung = (formAddNguoiDung: FormAddNguoiDung) => {
    return http.post("api/users", formAddNguoiDung);
  };
  XoaNguoiDung = (id: string) => {
    return http.delete(`/api/users/${id}`);
  };
  CapNhatNguoiDung = (arg: updateUser) => {
    return http.put(`/api/users/${arg.id}`, arg.values);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDung();
