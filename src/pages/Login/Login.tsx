import { useFormik } from "formik";
import { values } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { postDangNhap } from "../../redux/XacThucNguoiDung/XacThucNguoiDung.thunk";

type Props = {};

function Login({}: Props) {
  const history = useHistory();
  const dispatch = useDispatch<any>();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email không đúng định dạng")
        .required("kiểm tra lại email"),
      password: Yup.string()
        .min(6, "có ít nhất 6 kí tự")
        .required("kiểm tra lại mật khẩu!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(postDangNhap(values));
      history.goBack();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex -mx-3"></div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label className="text-xs font-semibold px-1">Email</label>
          {/* input email */}
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
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-12">
          <label className="text-xs font-semibold px-1">Password</label>
          {/* input Password */}
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
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <button
            type="submit"
            className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
          >
            Đăng Nhập
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        {/* quen mat khau */}
        <div className="text-black">
          <p>Quên mật khẩu?</p>
        </div>
        {/* đăng ký */}
        <div>
          <p>
            Bạn chưa có tài khoản?
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => {
                history.push("/dangky");
              }}
            >
              Đăng ký
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
