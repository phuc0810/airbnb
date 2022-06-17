import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { getHotelList } from "./QuanLyPhongChoThue.thunk";

export const useQuanLyPhongChoThue = () =>
  useSelector((state: RootState) => state.quanLyPhongChoThueReducer);

export const useDispatchHotelList = () => {
  const dispatch = useDispatch<any>();
  const { hotelList } = useQuanLyPhongChoThue();
  useEffect(() => {
    if (!hotelList) {
      dispatch(getHotelList());
    }
  }, []);
  return { hotelList };
};
