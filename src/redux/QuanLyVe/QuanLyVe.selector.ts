import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { getDanhSachViTri, getNavList } from "./QuanLyVe.thunk";

export const useSelectorQuanLyVe = () =>
  useSelector((state: RootState) => state.quanLyVeReducer);

export const useDanhSachViTri = () => {
  const dispatch = useDispatch<any>();
  const { danhSachViTri } = useSelectorQuanLyVe();
  useEffect(() => {
    if (!danhSachViTri) {
      dispatch(getDanhSachViTri());
    }
  }, []);
  return { danhSachViTri };
};

export const useDispatchNavList = () => {
  const dispatch = useDispatch<any>();
  const { navList } = useSelectorQuanLyVe();
  useEffect(() => {
    if (!navList) {
      dispatch(getNavList());
    }
  }, []);
  return { navList };
};
