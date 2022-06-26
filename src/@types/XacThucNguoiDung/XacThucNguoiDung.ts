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