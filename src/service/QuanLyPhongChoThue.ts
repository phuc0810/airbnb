import { http } from "../util/setting/config";

export class QuanLyPhongChoThue {
  LayDanhSachPhongChoThue = (page: number, limit: number, locationId: string) => {
    return http.get(`/api/rooms?skip=${page * limit}&limit=${limit}&locationId=${locationId}`);
  };
  LayReviewRoom = (id: string) => {
    return http.get(`/api/rooms/${id}`);
  };
  DanhSachPhongPhongChoThuePaginate = (soTrang: any) => {
    return http.get(`/api/rooms?skip=${soTrang * 22}&limit=22`);
  };
}

export const quanLyPhongChothue = new QuanLyPhongChoThue();
