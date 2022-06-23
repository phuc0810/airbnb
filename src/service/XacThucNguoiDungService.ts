import { http } from "../util/setting/config";

export class XacThucNguoiDungService {
  DangNhap = (values: { email: string; password: string }) => {
    return http.post("/api/auth/login", values);
  };
}

export const xacThucNguoiDungService = new XacThucNguoiDungService();
