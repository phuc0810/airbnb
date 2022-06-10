export interface ThongTinChiTietVe {
  deleteAt: Boolean;
  _id: String;
  checkIn: String;
  checkOut: String;
  userId: {
    tickets: String[];
    deleteAt: Boolean;
    _id: String;
    name: String;
    email: String;
    password: String;
    phone: String;
    birthday: String;
    gender: Boolean;
    address: String;
    type: String;
    avatar: String;
  };
  roomId: {
    deleteAt: Boolean;
    _id: String;
    name: String;
    guests: Number;
    bedRoom: Number;
    bath: Number;
    description: String;
    price: Number;
    elevator: Boolean;
    hotTub: Boolean;
    pool: Boolean;
    indoorFireplace: Boolean;
    dryer: false;
    gym: false;
    kitchen: Boolean;
    wifi: Boolean;
    heating: Boolean;
    cableTV: Boolean;
    image: String;
  };
  __v: Number;
}
