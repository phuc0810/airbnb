import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { getThongTinChiTietVe } from "./QuanLyVe.thunk";

export const useSelectorQuanLyVe = () =>
  useSelector((state: RootState) => state.quanLyVeReducer);

export const useLayThongTinChiTietVe = () => {
  const dispatch = useDispatch<any>();
  const { thongTinChiTietVe } = useSelectorQuanLyVe();
  useEffect(() => {
    if (!thongTinChiTietVe) {
      dispatch(getThongTinChiTietVe());
    }
  }, []);
  return { thongTinChiTietVe };
};
