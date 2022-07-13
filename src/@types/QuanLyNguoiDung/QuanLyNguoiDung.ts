export interface ThongTinNguoiDung {
  tickets: [];
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
}
export interface NguoiDung {
  tickets: string[];
  deleteAt: boolean;
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  __v: number;
  avatar: string;
  type: string;
}

export interface FormAddNguoiDung {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  type: string;
  address: string;
}
