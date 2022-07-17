import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
//!---------------------- snackbar-----------------
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useDispatchThongTinChiTietViTri } from "../../../../../redux/QuanLyViTri/QuanLyViTri.selector";
import { quanLyViTriAction } from "../../../../../redux/QuanLyViTri/QuanLyViTri.reducer";
import { putCapNhatNguoiDung } from "../../../../../redux/QuanLyNguoiDung/QuanLyNguoiDung.thuink";
import { putUpdateLocation } from "../../../../../redux/QuanLyViTri/QuanLyViTri.thunk";
type Props = {
  idUser: string;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function FormUpdateLocation(props: Props) {
  const dispatch = useDispatch<any>();
  const { thongTinChiTietViTri } = useDispatchThongTinChiTietViTri(
    props.idUser
  );

  // !-------------------------- handleSnackbar-----------------
  //   let { changeSnackbar } = useSelectorQuanLyViTri();
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: thongTinChiTietViTri?.name || "",
      province: thongTinChiTietViTri?.province || "",
      country: thongTinChiTietViTri?.country || "",
      valueate: thongTinChiTietViTri?.valueate || "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
      let payload = {
        values,
        id: props.idUser,
      };
      dispatch(putUpdateLocation(payload));
    },
  });
  return (
    <form className="form-add-admin" onSubmit={formik.handleSubmit}>
      <div className="flex -mx-3 flex-wrap">
        {/* //!input tên */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">Tên</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Tên"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
        </div>
        {/* //!input province */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">province</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="province"
              name="province"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.province}
            />
          </div>
        </div>

        {/* //!input country */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">country</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="country"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
          </div>
        </div>

        {/* //!input valueate */}

        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">valueate</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="number"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="valueate"
              name="valueate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.valueate}
            />
          </div>
        </div>
      </div>
      <hr className="mb-4 bg-gray-500" style={{ height: "2px" }} />
      <Button variant="contained" type="submit" className="float-right">
        submit
      </Button>
    </form>
  );
}

export default FormUpdateLocation;
