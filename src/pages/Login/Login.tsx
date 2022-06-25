import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postDangNhap } from "../../redux/XacThucNguoiDung/XacThucNguoiDung.thunk";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as Yup from "yup";
import AlertLogin from "./AlertLogin/AlertLogin";
import { useSelectorXacThucNguoiDung } from "../../redux/XacThucNguoiDung/XacThucNguoiDung.selector";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

type Props = {};

function Login({}: Props) {
  let { alerLogin } = useSelectorXacThucNguoiDung();
  return (
    <div className="body-login">
      <div
        className="container"
        id="container"
        style={{ overflow: "auto", height: "550px" }}
      >
        <div className="form-container sign-up-container">
          {/* //!Form dang ky */}
          <FormDangKy />
        </div>
        <div className="form-container sign-in-container">
          {/* //! form dang nhap */}
          {alerLogin ? <AlertLogin /> : ""}
          <FormDangNhap />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin
                cá nhân của bạn
              </p>
              <button className="ghost" id="signIn">
                Đăng Nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng
                tôi
              </p>
              <button className="ghost" id="signUp">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

function FormDangNhap() {
  let history = useHistory();
  const dispatch = useDispatch<any>();
  let { thongTinDangNhap } = useSelectorXacThucNguoiDung();

  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton?.addEventListener("click", () => {
    container?.classList.add("right-panel-active");
  });

  signInButton?.addEventListener("click", () => {
    container?.classList.remove("right-panel-active");
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("kiểm tra lại tài khoản"),
      password: Yup.string().required("kiểm tra lại mật khẩu."),
      // .min(8, "mật khẩu có ít nhất 8 kí tự.")
      // .matches(
      //   /[a-zA-Z]/,
      //   "phải chứa chữ trong mật khẩu và chỉ chứa chữ latin."
      // ),
    }),
    onSubmit: (values: { email: string; password: string }) => {
      console.log(values);
      dispatch(postDangNhap(values));
      history.push(`/user/${thongTinDangNhap?.user._id}`);
    },
  });
  return (
    <form action="#" onSubmit={formik.handleSubmit}>
      <h1>Đăng Nhập</h1>
      <div className="social-container">
        <a href="#" className="social">
          <FacebookOutlinedIcon />
        </a>
        <a href="#" className="social">
          <GoogleIcon />
        </a>
        <a href="#" className="social">
          <LinkedInIcon />
        </a>
      </div>
      <span>hoặc có thể sử dụng account của bạn</span>
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={formik.handleChange}
        // value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? (
        <span className="text-red-600">{formik.errors.email} </span>
      ) : (
        ""
      )}
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={formik.handleChange}
        // value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.errors.password && formik.touched.password ? (
        <span className="text-red-600">{formik.errors.password} </span>
      ) : (
        ""
      )}
      <a href="#">Quên mật khẩu ?</a>
      <button type="submit">Đăng Nhập</button>
    </form>
  );
}

function FormDangKy() {
  let history = useHistory();
  const dispatch = useDispatch<any>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values: { name: string; email: string; password: string }) => {
      console.log(values);
      dispatch(postDangNhap(values));
      //   history.goBack();
    },
  });

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <form action="#">
      <h1>Đăng Ký</h1>
      <input type="text" placeholder="Tên" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mật Khẩu" />
      <input type="text" placeholder="Phone" />
      {/* <input type='' placeholder="Password" /> */}
      <input type="text" placeholder="Địa chỉ" />
      <div>
        <Space direction="vertical">
          <DatePicker onChange={onChange} style={{ display: "flex" }} />
        </Space>
      </div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <FormControlLabel value="male" control={<Radio />} label="Nam" />
        <FormControlLabel value="female" control={<Radio />} label="Nữ" />
      </RadioGroup>

      <button>Sign Up</button>
    </form>
  );
}
