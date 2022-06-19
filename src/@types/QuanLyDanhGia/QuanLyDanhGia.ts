export interface roomIsRated {
  deleteAt: boolean;
  _id: string;
  content: string;
  roomId: RoomId;
  userId: UserId;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface RoomId {
  deleteAt: boolean;
  _id: string;
  name: string;
  guests: number;
  bedRoom: number;
  bath: number;
  description: string;
  price: number;
  elevator: boolean;
  hotTub: boolean;
  pool: boolean;
  indoorFireplace: boolean;
  dryer: boolean;
  gym: boolean;
  kitchen: boolean;
  wifi: boolean;
  heating: boolean;
  cableTV: boolean;
  locationId: string;
  __v: number;
  image: string;
}

export interface UserId {
  tickets: [];
  deleteAt: boolean;
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  address: string;
  type: string;
  __v: number;
  avatar: string;
}
