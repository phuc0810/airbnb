import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { postDangNhap } from "./XacThucNguoiDung.thunk";

export const useSelectorXacThucNguoiDung = () =>
  useSelector((state: RootState) => state.xacThucNguoiDungReducer);



