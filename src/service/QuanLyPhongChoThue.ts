import { http } from "../util/setting/config";

export class QuanLyPhongChoThue {
  LayDanhSachPhongChoThue = () => {
    return http.get(`/api/rooms?page=1&limit=22`);
  };
  LayReviewRoom = (id: string) => {
    return http.get(`/api/rooms/${id}`);
  };
  DanhSachPhongPhongChoThuePaginate = (soTrang: any) => {
    return http.get(`/api/rooms?page=${soTrang}&limit=22`);
  };
}

export const quanLyPhongChothue = new QuanLyPhongChoThue();
