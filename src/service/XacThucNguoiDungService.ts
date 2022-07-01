import { http } from "../util/setting/config";

export class XacThucNguoiDungService {
  DangNhap = (values: { email: string; password: string }) => {
    return http.post("/api/auth/login", values);
  };
  DangKy = (formData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    gender: boolean;
    address: string;
  }) => {
    return http.post("/api/auth/register", formData);
  };
}

export const xacThucNguoiDungService = new XacThucNguoiDungService();
