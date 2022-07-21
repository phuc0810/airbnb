import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
//!---------------------- snackbar-----------------
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useSelectorQuanLyViTri } from "../../../../redux/QuanLyViTri/QuanLyViTri.selector";
// switch
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { postNewRoom } from "../../../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.thunk";

type Props = {};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function FormAddPhong(props: Props) {
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
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      guests: 0,
      bedRoom: 0,
      bath: 0,
      description: "",
      price: 0,
      elevator: false,
      hotTub: false,
      pool: false,
      indoorFireplace: false,
      dryer: false,
      gym: false,
      kitchen: false,
      wifi: false,
      heating: false,
      cableTV: false,
      locationId: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
      dispatch(postNewRoom(values));
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
        {/* //!input description */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">description</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input locationId */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">locationId</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="locationId"
              name="locationId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input guests */}

        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">guests</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="number"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="guests"
              name="guests"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input bedRoom */}

        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">bedRoom</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="number"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="bedRoom"
              name="bedRoom"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input bath */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">bath</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="number"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="bath"
              name="bath"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input price */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">price</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="number"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="price"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input elevator */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.elevator}
                  onChange={formik.handleChange}
                  name="elevator"
                />
              }
              label="elevator"
            />
          </div>
        </div>

        {/* //!input hotTub */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.hotTub}
                  onChange={formik.handleChange}
                  name="hotTub"
                />
              }
              label="hotTub"
            />
          </div>
        </div>

        {/* //!input pool */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.pool}
                  onChange={formik.handleChange}
                  name="pool"
                />
              }
              label="pool"
            />
          </div>
        </div>

        {/* //!input indoorFireplace */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.indoorFireplace}
                  onChange={formik.handleChange}
                  name="indoorFireplace"
                />
              }
              label="indoorFireplace"
            />
          </div>
        </div>

        {/* //!input dryer */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.dryer}
                  onChange={formik.handleChange}
                  name="dryer"
                />
              }
              label="dryer"
            />
          </div>
        </div>

        {/* //!input gym */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.gym}
                  onChange={formik.handleChange}
                  name="gym"
                />
              }
              label="gym"
            />
          </div>
        </div>

        {/* //!input kitchen */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.kitchen}
                  onChange={formik.handleChange}
                  name="kitchen"
                />
              }
              label="kitchen"
            />
          </div>
        </div>

        {/* //!input wifi */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.wifi}
                  onChange={formik.handleChange}
                  name="wifi"
                />
              }
              label="wifi"
            />
          </div>
        </div>

        {/* //!input heating */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.heating}
                  onChange={formik.handleChange}
                  name="heating"
                />
              }
              label="heating"
            />
          </div>
        </div>

        {/* //!input cableTV */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1"></label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.cableTV}
                  onChange={formik.handleChange}
                  name="cableTV"
                />
              }
              label="cableTV"
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

      {/* <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
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
      </Snackbar> */}
    </form>
  );
}

export default FormAddPhong;
