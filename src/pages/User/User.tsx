import React from "react";
import HeaderUser from "./HeaderUser/HeaderUser";
import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";

type Props = {};

function User({}: Props) {
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
                <Avatar
                  alt="Remy Sharp"
                  src="http://picsum.photos/200"
                  style={{ width: "100px", height: "100px" }}
                />
                <button className="mt-3 underline font-bold">
                  cập nhật hình ảnh
                </button>
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
              <span className="text-gray-400 my-4">bắt đầu tham gia vào 2022</span>
              <span className="underline font-bold">chỉnh sửa hồ sơ</span>
              <span className="text-xl font-bold flex justify-start items-center mt-10 mb-10">
                <StarIcon />0 đánh giá
              </span>
              <div className="py-5" style={{borderTop:'2px solid #dddddd',borderBottom:'2px solid #dddddd'}}>
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
