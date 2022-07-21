import React, { useEffect, useState } from "react";
import HeaderUser from "./HeaderUser/HeaderUser";
import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";
import {
  ThongTinDangNhap,
  UserInfo,
  USER_LOGIN,
} from "../../@types/XacThucNguoiDung/XacThucNguoiDung";
import { Redirect, useParams } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postCapNhatHinhDaiDien } from "../../redux/QuanLyNguoiDung/QuanLyNguoiDung.thuink";
import { useSelectorXacThucNguoiDung } from "../../redux/XacThucNguoiDung/XacThucNguoiDung.selector";
import { postDangNhap } from "../../redux/XacThucNguoiDung/XacThucNguoiDung.thunk";

type Props = {};

function User(props: Props) {
  let { userLogin, imgAvatar } = useSelectorXacThucNguoiDung();
  console.log(imgAvatar);
  console.log(userLogin);

  return (
    <div>
      <HeaderUser />
      <div className="container user-body max-w-7xl mx-auto mt-10">
        <div className="flex">
          <div
          className="user-avatar w-1/3"
            style={{
              border: "2px solid #dddddd",
              borderRadius: "5px",
            }}
          >
            <div className="item p-5">
              {/* img anh dai dien */}
              <div className="flex flex-col justify-center items-center">
                <UploadAvatar userLogin={userLogin} />
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
                  {userLogin?.name} đã xác nhận{" "}
                </span>
                <span className="mt-5 mb-6">
                  {" "}
                  <CheckIcon /> địa chỉ email
                </span>
              </div>
            </div>
          </div>
          {/* -------------------- */}
          <div className="w-4/6 user-content">
            <div className="ml-10 flex flex-col">
              <h1 className="font-bold text-2xl">
                Xin chào tôi là {userLogin?.name}
              </h1>
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

function UploadAvatar(props: UploadAvatar) {
  let avatar = props.userLogin?.avatar;
  let dispatch = useDispatch<any>();
  let [imgSrc, setImgSrc] = useState(`${avatar}`);

  let handleChangeFile = (e: any) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      setImgSrc(e.target?.result);
    };
    formik.setFieldValue("avatar", file);
  };

  const formik = useFormik({
    initialValues: {
      avatar: {
        name: "",
        size: null,
        type: "",
      },
    },
    onSubmit: (values) => {
      let formData = new FormData();
      formData.append("avatar", values.avatar as any, values.avatar.name);

      console.log("formdata", formData.get("avatar"));

      dispatch(postCapNhatHinhDaiDien(formData));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Avatar
        alt="Remy Sharp"
        src={imgSrc}
        style={{ width: "100px", height: "100px" }}
      />
      <input type="file" onChange={handleChangeFile} />
      <button type="submit" className="mt-3 underline font-bold">
        cập nhật hình ảnh
      </button>
    </form>
  );
}

interface UploadAvatar {
  userLogin?: UserInfo;
}
