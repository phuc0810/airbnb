import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { quanLyPhongChoThueAction } from "./QuanLyPhongChoThue.reducer";
import {
  getHotelList,
  getHotelListAdmin,
  getReviewRoom,
  getThongTinChiTietPhong,
} from "./QuanLyPhongChoThue.thunk";

export const useQuanLyPhongChoThue = () =>
  useSelector((state: RootState) => state.quanLyPhongChoThueReducer);

export const useDispatchHotelList = () => {
  const dispatch = useDispatch<any>();
  const { hotelList, filter } = useQuanLyPhongChoThue();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getHotelList());
  }, [filter]);
  return { hotelList };
};

export const useDispatchReviewRoom = (id: string) => {
  const dispatch = useDispatch<any>();
  const { reviewRoom } = useQuanLyPhongChoThue();
  useEffect(() => {
    if (!reviewRoom) {
      dispatch(getReviewRoom(id));
    }
    return () => {
      dispatch(quanLyPhongChoThueAction.setReviewRoom(undefined));
    };
  }, []);
  return { reviewRoom };
};

export const useDispatchHotelListAdmin = () => {
  const dispatch = useDispatch<any>();
  const { hotelListAdmin, filterAdmin } = useQuanLyPhongChoThue();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getHotelListAdmin());
  }, [filterAdmin]);
  return { hotelListAdmin };
};

export const useDispatchChiTietPhong = (id: string) => {
  const dispatch = useDispatch<any>();
  const { thongTinChiTietPhong } = useQuanLyPhongChoThue();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getThongTinChiTietPhong(id));
  }, [id]);
  return { thongTinChiTietPhong };
};
