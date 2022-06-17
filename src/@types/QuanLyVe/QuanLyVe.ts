// export interface ThongTinChiTietVe {
//   deleteAt: boolean;
//   _id: string;
//   checkIn: string;
//   checkOut: string;
//   userId: {
//     tickets: string[];
//     deleteAt: boolean;
//     _id: string;
//     name: string;
//     email: string;
//     password: string;
//     phone: string;
//     birthday: string;
//     gender: boolean;
//     address: string;
//     type: string;
//     avatar: string;
//   };
//   roomId: {
//     deleteAt: boolean;
//     _id: string;
//     name: string;
//     guests: number;
//     bedRoom: number;
//     bath: number;
//     description: string;
//     price: number;
//     elevator: boolean;
//     hotTub: boolean;
//     pool: boolean;
//     indoorFireplace: boolean;
//     dryer: false;
//     gym: false;
//     kitchen: boolean;
//     wifi: boolean;
//     heating: boolean;
//     cableTV: boolean;
//     image: string;
//   };
//   __v: number;
// }

export interface NavList {
  name: string;
  icon: string;
  id: string;
}

export interface DanhSachViTri {
  _id: string;
  name: string;
  province: string;
  country: string;
  valueate: number;
  __v: number;
  image: string;
}
export interface ViTri {
  country: string;
  deleteAt: boolean;
  image: string;
  name: string;
  province: string;
  valueate: number;
  __v: number;
  _id: string;
}

