import { http } from "../util/setting/config";

export class QuanLyPhongChoThue {
  LayDanhSachPhongChoThue = () => {
    return http.get("/api/rooms");
  };
}

export const quanLyPhongChothue = new QuanLyPhongChoThue();
