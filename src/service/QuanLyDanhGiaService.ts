import { http } from "../util/setting/config";

export class QuanLyDanhGia {
    LayDanhSachDanhGiaTheoPhong=(id:string)=>{
        return http.get(`/api/reviews/byRoom?roomId=${id}`)
    }
}

export const quanLyDanhGia = new QuanLyDanhGia();
