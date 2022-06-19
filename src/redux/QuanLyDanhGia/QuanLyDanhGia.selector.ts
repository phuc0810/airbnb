import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { getLayDanhSachDanhGiaTheoPhong } from "./QuanLyDanhGia.thunk";

export const useSelectorQuanLyDanhGia = () =>
  useSelector((state: RootState) => state.quanLyDanhGiaReducer);

export const useDispatchLayDanhSachDanhGiaTheoPhong = (id: string) => {
  const dispatch = useDispatch<any>();
  const { roomIsRated } = useSelectorQuanLyDanhGia();
  useEffect(() => {
    if (!roomIsRated) {
      dispatch(getLayDanhSachDanhGiaTheoPhong(id));
    }
  }, []);
  return { roomIsRated };
};
