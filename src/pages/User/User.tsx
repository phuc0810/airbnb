import React, { useState } from "react";
import HeaderUser from "./HeaderUser/HeaderUser";
import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";
import { USER_LOGIN } from "../../@types/XacThucNguoiDung/XacThucNguoiDung";
import { Redirect, useParams } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postCapNhatHinhDaiDien } from "../../redux/QuanLyNguoiDung/QuanLyNguoiDung.thuink";
import { useDispatchThongTinNguoiDung } from "../../redux/QuanLyNguoiDung/QuanLyNguoiDung.selector";

type Props = {};

function User({}: Props) {
  let { id } = useParams<{ id: string }>();
  console.log(id);

  let { thongTinNguoiDung } = useDispatchThongTinNguoiDung(id);
  console.log(thongTinNguoiDung);

  return (
    <div>
      <HeaderUser />
      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex">
          <div
            style={{
              width: "30%",
              border: "2px solid #dddddd",
              borderRadius: "5px",
            }}
          >
            <div className="item p-5">
              {/* img anh dai dien */}
              <div className="flex flex-col justify-center items-center">
                <UploadAvatar />
              </div>
              <div className="content flex flex-col mt-6">
                <VerifiedUserIcon />
                <span className="text-base font-bold mt-5">
                  xác nhận danh tính
                </span>
                <p className="mt-2">
                  xác thực danh tính của bạn với huy hiệu xác nhận danh tính
                </p>
                <Button
                  variant="outlined"
                  style={{
                    color: "black",
                    borderColor: "black",
                    width: "50%",
                    marginTop: "20px",
                  }}
                >
                  Outlined
                </Button>
                <hr
                  style={{
                    color: "#grey",
                    width: "100%",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                />
                <span className="text-xl font-bold">
                  ten người dùng đã xác nhận{" "}
                </span>
                <span className="mt-5 mb-6">
                  {" "}
                  <CheckIcon /> địa chỉ email
                </span>
              </div>
            </div>
          </div>
          {/* -------------------- */}
          <div style={{ width: "70%" }}>
            <div className="ml-10 flex flex-col">
              <h1 className="font-bold text-2xl">Xin chào tôi là tên user</h1>
              <span className="text-gray-400 my-4">
                bắt đầu tham gia vào 2022
              </span>
              <span className="underline font-bold">chỉnh sửa hồ sơ</span>
              <span className="text-xl font-bold flex justify-start items-center mt-10 mb-10">
                <StarIcon />0 đánh giá
              </span>
              <div
                className="py-5"
                style={{
                  borderTop: "2px solid #dddddd",
                  borderBottom: "2px solid #dddddd",
                }}
              >
                <span>Đánh giá của bạn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

function UploadAvatar() {
  let dispatch = useDispatch<any>();
  let [imgSrc, setImgSrc] = useState("");

  let handleChangeFile = (e: any) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      setImgSrc(e.target?.result);
    };
    formik.setFieldValue("hinhAnh", file);
  };

  const formik = useFormik({
    initialValues: {
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log(values);
      let formData = new FormData();
      formData.append("File", values.hinhAnh as Blob);
      dispatch(postCapNhatHinhDaiDien(formData))
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Avatar
        alt="Remy Sharp"
        src={imgSrc}
        style={{ width: "100px", height: "100px" }}
      />
      <input type="file" onChange={handleChangeFile} name="hinhAnh" />
      <button type="submit" className="mt-3 underline font-bold">
        cập nhật hình ảnh
      </button>
    </form>
  );
}
