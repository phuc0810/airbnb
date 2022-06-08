import { GlobalOutlined, SketchOutlined } from "@ant-design/icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

function Footer(props: Props) {
  return (
    <footer
      className="p-6 dark:bg-gray-800 dark:text-gray-100 wow animate__fadeInDown"
      data-wow-duration="1s"
      data-wow-delay="0s"
      style={{ background: "rgba(27,27,27,1.00)" }}
    >
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">GIỚI THIỆU</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              <span>Phương thức hoạt động của Airbnb</span>
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Trang tin tức
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              nhà đầu tư
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Airbnb Plus
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Airbnb luxe
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              HotelToni/ht
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Airbnb for Work
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Nhờ có Host , mọi điều có thể
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Thư của nhà sáng lập
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">CỘNG ĐỒNG</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Sự đang dạng và Cảm giác thân thuộc
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Tiện nghi phù hợp cho người khuyết tật
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Đối tác liên kết Airbnb
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Chỗ ở cho tuyến đầu
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Lượt giới thiệu của khách
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Airbnb.org
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">ĐÓN TIẾP KHÁCH</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Cho thuê nhà
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Tổ chức Trải nghiệm trực tuyến
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Tổ chức trải nghiệm
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Đón tiếp khách có trách nhiệm
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Trung tâm tài nguyên
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Trung tâm cộng đồng
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">HỖ TRỢ</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Trung tâm trợ giúp
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Các tùy chọn hủy
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Hỗ trợ khu dân cư
            </NavLink>
            <NavLink className="nav-link" rel="noopener noreferrer" to="/">
              Tin cậy và an toàn
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 text-sm border-t-2 mt-12 pt-8 text-white ">
        <div>
          <span>© Copyright 1986. All Rights Reserved.</span> .{" "}
          <span>Quyền riêng tư</span> .<span>Điều khoản</span> .
          <span>Sơ đồ trang web</span>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <GlobalOutlined className="underline cursor-pointer" />{" "}
            <span className="underline cursor-pointer">Tiếng Việt(VN)</span>
            <div className="mx-9">
              <i className="fa fa-dollar-sign text-base underline cursor-pointer"></i>{" "}
              <span className="underline cursor-pointer">USD</span>
            </div>
            <div className="icon">
              <FacebookIcon color="info" />
              <InstagramIcon className="mx-1 text-pink-500" />
              <TwitterIcon style={{ color: "#1d9bf0" }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
