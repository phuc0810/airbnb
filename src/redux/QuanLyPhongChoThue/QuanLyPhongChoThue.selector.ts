import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { getHotelList, getReviewRoom } from "./QuanLyPhongChoThue.thunk";

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

export const useDispatchReviewRoom = (id: string) => {
  const dispatch = useDispatch<any>();
  const { reviewRoom } = useQuanLyPhongChoThue();
  useEffect(() => {
    if (!reviewRoom) {
      dispatch(getReviewRoom(id));
    }
  }, []);
  return { reviewRoom };
};
