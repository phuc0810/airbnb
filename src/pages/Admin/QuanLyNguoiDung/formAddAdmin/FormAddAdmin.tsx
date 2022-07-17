import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { postTaoNguoiDung } from "../../../../redux/QuanLyNguoiDung/QuanLyNguoiDung.thuink";
//!---------------------- snackbar-----------------
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useSelectorQuanLyNguoiDung } from "../../../../redux/QuanLyNguoiDung/QuanLyNguoiDung.selector";

type Props = {};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function FormAddAdmin(props: Props) {
  const dispatch = useDispatch<any>();

  const handleOnChangeDate: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    let birthday = dateString;
    formik.setFieldValue("birthday", birthday);
    console.log(dateString);
  };

  let handleChangeGender = (name: string) => {
    return (e: any) => {
      let boolean = true;
      const valueRadioBox = e.target.value;
      if (valueRadioBox === "male") {
        boolean = true;
      } else if (valueRadioBox === "female") {
        boolean = false;
      }
      console.log(valueRadioBox);
      console.log(boolean);

      formik.setFieldValue(name, boolean);
    };
  };

  // !-------------------------- handleSnackbar-----------------
  let { changeSnackbar } = useSelectorQuanLyNguoiDung();
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
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      type: "",
      address: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
      dispatch(postTaoNguoiDung(values));
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
        {/* //!input email */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">email</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="email"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input password */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">mật khẩu</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="password"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input phone */}

        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">Số điện thoại</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="tel"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Số điện thoại"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input địa chỉ */}

        <div className="w-full px-3 mb-5">
          <label className="text-xs font-semibold px-1">Địa chỉ</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Địa chỉ"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* //!input birthday */}
        <div className="w-1/2 px-3 mb-5">
          <label className="text-xs font-semibold px-1">sinh nhật</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={handleOnChangeDate}
              onBlur={formik.handleBlur}
              name="birthday"
              className="w-2/3 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 bg-white"
              popupStyle={{
                zIndex: 2000,
              }}
            />
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Giới tính</label>
            {/* input email */}
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg" />
              </div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Nữ"
                    onChange={handleChangeGender("gender")}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Nam"
                    onChange={handleChangeGender("gender")}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs font-semibold px-1">Giới tính</label>
            {/* input email */}
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg" />
              </div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="ADMIN"
                    control={<Radio />}
                    label="ADMIN"
                    onChange={formik.handleChange}
                    name="type"
                  />
                  <FormControlLabel
                    value="CLIENT"
                    control={<Radio />}
                    label="CLIENT"
                    onChange={formik.handleChange}
                    name="type"
                  />
                </RadioGroup>
              </FormControl>
            </div>
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
            Thêm người dùng thành công
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Thêm người dùng thất bại
          </Alert>
        )}
      </Snackbar>
    </form>
  );
}

export default FormAddAdmin;
