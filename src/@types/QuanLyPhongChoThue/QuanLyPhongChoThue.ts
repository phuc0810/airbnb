export interface DSHotel {
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
  locationId?: {
    deleteAt: boolean;
    name: string;
    province: string;
    country: string;
    valueate: number;
    image: string;
  };
  __v: number;
  image: string;
}
export interface ReviewRoom {
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
  locationId?: {
    deleteAt: boolean;
    name: string;
    province: string;
    country: string;
    valueate: number;
    image: string;
  };
  __v: number;
  image: string;
}
export interface PhongDat {
  roomId: string;
  checkIn: string;
  checkOut: string;
}

export interface NewRoom {
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
}

export interface UpdateRoom {
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
}
