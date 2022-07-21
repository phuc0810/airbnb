import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
//!---------------------- snackbar-----------------
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { postAddLocation } from "../../../../redux/QuanLyViTri/QuanLyViTri.thunk";
import { useSelectorQuanLyViTri } from "../../../../redux/QuanLyViTri/QuanLyViTri.selector";
import { quanLyViTriAction } from "../../../../redux/QuanLyViTri/QuanLyViTri.reducer";

type Props = {};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function FormAddViTri(props: Props) {
  const dispatch = useDispatch<any>();

  // !-------------------------- handleSnackbar-----------------
  let { changeSnackbar } = useSelectorQuanLyViTri();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(quanLyViTriAction.setChangeSnackbar(null))
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      province: "",
      country: "",
      valueate: 0,
    },
    validationSchema: Yup.object({
      valueate: Yup.number().min(0, "từ 0-10").max(10, "từ 0-10"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(postAddLocation(values));
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
              min="0"
              max="10"
            />
          </div>
        </div>
      </div>
      <hr className="mb-4 bg-gray-500" style={{ height: "2px" }} />
      <Button
        variant="contained"
        type="submit"
        className="float-right"
        onClick={handleClick}
      >
        submit
      </Button>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        {changeSnackbar ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Thêm thành công
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Thêm thất bại
          </Alert>
        )}
      </Snackbar>
    </form>
  );
}

export default FormAddViTri;
