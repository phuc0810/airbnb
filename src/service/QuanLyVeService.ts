import { http } from "../util/setting/config";

export class QuanLyVe {
  LayDanhSachViTri = () => {
    return http.get("/api/locations");
  };
}

export const quanLyVeService = new QuanLyVe();
