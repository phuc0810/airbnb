import { http } from "../util/setting/config";

export class QuanLyPhongChoThue {
  LayDanhSachPhongChoThue = () => {
    return http.get(`/api/rooms/`);
  };
  LayReviewRoom = (id: string) => {
    return http.get(`/api/rooms/${id}`);
  };
}

export const quanLyPhongChothue = new QuanLyPhongChoThue();
