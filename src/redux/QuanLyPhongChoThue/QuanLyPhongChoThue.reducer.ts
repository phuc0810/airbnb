import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DSHotel,
  ReviewRoom,
} from "../../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";

interface typeInitialState {
  hotelList?: DSHotel[];
  reviewRoom?: ReviewRoom;
  changeHotelList?: DSHotel[];
  state?: string;
  isLoading: boolean;
  filter: {
    page: number;
    limit: number;
    locationId: string;
  };
}

const initialState: typeInitialState = {
  // changeHotelList: [],
  isLoading: false,
  filter: {
    page: 0,
    limit: 22,
    locationId: "",
  },
};

export const {
  reducer: quanLyPhongChoThueReducer,
  actions: quanLyPhongChoThueAction,
} = createSlice({
  name: "QuanLyPhongChoThue",
  initialState,
  reducers: {
    setHotelList: (state, action: PayloadAction<DSHotel[]>) => {
      state.hotelList = action.payload;
      state.changeHotelList = [...state.hotelList];
      state.isLoading = true;
    },
    setReviewRoom: (state, action: PayloadAction<ReviewRoom | undefined>) => {
      state.reviewRoom = action.payload;
    },
    changeHotelList: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
      if (state.state === "gym") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.gym === true
        );
      } else if (state.state === "cableTV") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.cableTV === true
        );
      } else if (state.state === "elevator") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.elevator === true
        );
      } else if (state.state === "dryer") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.dryer === true
        );
      } else if (state.state === "heating") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.heating === true
        );
      } else if (state.state === "hotTub") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.hotTub === true
        );
      } else if (state.state === "indoorFireplace") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.indoorFireplace === true
        );
      } else if (state.state === "kitchen") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.kitchen === true
        );
      } else if (state.state === "pool") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.pool === true
        );
      } else if (state.state === "wifi") {
        state.changeHotelList = state.hotelList?.filter(
          (item) => item.wifi === true
        );
      }
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    updateFilter: (
      state,
      action: PayloadAction<{ key: string; value: any }>
    ) => {
      const { key, value } = action.payload;
      state.filter = { ...state.filter, [key]: value };
    },
  },
});
