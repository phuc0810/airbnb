export const ACCESSTOKEN = "ACCESSTOKEN";
export const USER_LOGIN = "USER_LOGIN";

export interface ThongTinDangNhap {
  user: {
    tickets: string[];
    deleteAt: boolean;
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    type: string;
    __v: number;
    avatar: string;
    birthday: string;
    gender: boolean;
  };
  token: string;
}
export interface ThongTinDangKy {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  address: string;
}
export interface UserInfo {
  address?: string;
  avatar?: string;
  birthday?: string;
  deleteAt?: boolean;
  email?: string;
  gender?: boolean;
  name?: string;
  password?: string;
  phone?: string;
  tickets?: string[];
  type?: string;
  __v?: number;
  _id?: string;
}
