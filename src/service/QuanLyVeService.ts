import { http } from "../util/setting/config";

export class QuanLyVe {
  layThongTinChiTietVe = () => {
    return http.get("/api/tickets");
  };
}

export const quanLyVeService = new QuanLyVe();
