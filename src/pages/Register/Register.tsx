import { useFormik } from "formik";
import { values } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import moment from "moment";
import { postDangKy } from "../../redux/XacThucNguoiDung/XacThucNguoiDung.thunk";
import { ThongTinDangKy } from "../../@types/XacThucNguoiDung/XacThucNguoiDung";

type Props = {};

function Register(props: Props) {
  const history = useHistory();
  const dispatch = useDispatch<any>();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const handleOnChangeDate: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    let birthday = dateString;
    formik.setFieldValue("birthday", birthday);
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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: false,
      address: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email không đúng định dạng")
        .required("kiểm tra lại email"),
      password: Yup.string()
        .min(6, "có ít nhất 6 kí tự")
        .required("kiểm tra lại mật khẩu!"),
      name: Yup.string().required("không được bỏ trống").min(2, "Tên quá ngắn"),
      phone: Yup.string()
        .required("không được bỏ trống")
        .matches(phoneRegExp, "số điện thoại không hợp lệ"),
      address: Yup.string().required("không được bỏ trống"),
      birthday: Yup.string()
        .required("không được bỏ trống")
        .test("DOB", "Please choose a valid date of birth", (value) => {
          return moment().diff(moment(value), "years") >= 10;
        }),
    }),
    onSubmit: (values) => {
      console.log(values);
      // let formData = new FormData();
      // for (let key in values) {
      //   const k = key as keyof typeof values;
      //   formData.append(key, values[k] as any);
      // }
      // dispatch(postDangKy(formData as any));
      dispatch(postDangKy(values));
      history.goBack();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex -mx-3">
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
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </div>
        {/* //!input sdt */}
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
          {formik.errors.phone && formik.touched.phone && (
            <p className="text-red-600">{formik.errors.phone}</p>
          )}
        </div>
      </div>

      {/* //!input email */}
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-xs font-semibold px-1">Email</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg" />
            </div>
            <input
              type="email"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="johnsmith@example.com"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-600">{formik.errors.email}</p>
          )}
        </div>
      </div>
      {/* //!input password */}
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-xs font-semibold px-1">Password</label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
            </div>
            <input
              type="password"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="************"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-600">{formik.errors.password}</p>
          )}
        </div>
      </div>

      {/* //!input đia chỉ */}
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-xs font-semibold px-1">Địa chỉ</label>
          {/* input email */}
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="82 bà huyện thanh quan p9 q3"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.address && formik.touched.address && (
            <p className="text-red-600">{formik.errors.address}</p>
          )}
        </div>
      </div>

      {/* //!input ngay sinh */}
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-xs font-semibold px-1">Địa chỉ</label>
          {/* input email */}
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg" />
            </div>
            <DatePicker
              format={"DD/MM/YYYY"}
              onChange={handleOnChangeDate}
              onBlur={formik.handleBlur}
              name="birthday"
              className="w-2/3 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 bg-white"
            />
          </div>
          {formik.errors.birthday && formik.touched.birthday && (
            <p className="text-red-600">{formik.errors.birthday}</p>
          )}
        </div>
      </div>

      {/* //!gioi tinh */}
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
          <button
            type="submit"
            className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
          >
            Đăng Ký
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
