import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import {
  getLayDanhSachNguoiDung,
  getLayThongTinNguoiDung,
} from "./QuanLyNguoiDung.thuink";

export const useSelectorQuanLyNguoiDung = () => {
  return useSelector((state: RootState) => state.quanLyNguoiDungReducer);
};

export const useDispatchDanhSachNguoiDung = () => {
  const dispatch = useDispatch<any>();
  let { danhSachNguoiDung, filter } = useSelectorQuanLyNguoiDung();
  useEffect(() => {
    // if (!danhSachNguoiDung) {
    dispatch(getLayDanhSachNguoiDung());
    // }
  }, [filter]);
  return { danhSachNguoiDung };
};

export const UseDispatchThongTinNguoiDung = (id: string) => {
  const dispatch = useDispatch<any>();
  let { thongTinNguoiDung } = useSelectorQuanLyNguoiDung();
  useEffect(() => {
    dispatch(getLayThongTinNguoiDung(id));
  }, [id]);
  return { thongTinNguoiDung };
};
