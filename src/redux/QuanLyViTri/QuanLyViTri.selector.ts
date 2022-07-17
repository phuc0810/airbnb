import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { RootState } from "../store/rootReducer";
import { getChiTietViTri, getDanhSachViTriAdmin } from "./QuanLyViTri.thunk";

export const useSelectorQuanLyViTri = () => {
  return useSelector((state: RootState) => state.quanLyViTriReducer);
};

export const useDispatchDanhSachViTri = () => {
  const dispatch = useDispatch<any>();
  let { danhSachViTri, filter } = useSelectorQuanLyViTri();
  useEffect(() => {
    // if (!danhSachNguoiDung) {
    dispatch(getDanhSachViTriAdmin());
    // }
  }, [filter]);
  return { danhSachViTri };
};

export const useDispatchThongTinChiTietViTri = (id: string) => {
  const dispatch = useDispatch<any>();
  let { thongTinChiTietViTri } = useSelectorQuanLyViTri();
  useEffect(() => {
    dispatch(getChiTietViTri(id));
  }, [id]);
  return { thongTinChiTietViTri };
};
