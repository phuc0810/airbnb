import React, { useEffect, useState, lazy } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useDispatchNavList } from "../../redux/QuanLyVe/QuanLyVe.selector";
import { getNavList } from "../../redux/QuanLyVe/QuanLyVe.thunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/rootReducer";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {};

function Roomlist({}: Props) {
  const { navList } = useDispatchNavList();
  const [state, setState] = useState("Thang máy");

  return (
    <div
      className="Roomlist container max-w-7xl mx-auto relative"
      style={{ top: "120px" }}
    >
      <div
        className="menu grid grid-cols-10 text-center mt-5 sticky bg-white z-50"
        style={{ top: "100px" }}
      >
        {navList?.map((item, i) => {
          return (
            <div key={i}>
              <button
                className={state === item.name ? "activeNav" : ""}
                onClick={() => setState(item.name)}
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={item.icon}
                    alt={item.icon}
                    style={{ height: "45px" }}
                  />
                  <span>{item.name}</span>
                </div>
              </button>
            </div>
          );
        })}
      </div>
      {/* //* giao diện phòng  */}
      <Card />
    </div>
  );
}

export default Roomlist;

function Card() {
  return (
    <div className="grid grid-cols-4 mt-10">
      <div
        className="swiper-roomList"
        style={{ height: "500px", position: "relative" }}
      >
        <IconButton
          aria-label="add to favorites"
          style={{
            top: "10px",
            right: "10px",
            position: "absolute",
            zIndex: "10",
          }}
        >
          <FavoriteIcon />
        </IconButton>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          style={{ height: "300px", borderRadius: "10px", width: "100%" }}
        >
          <SwiperSlide
            style={{ backgroundImage: "url(http://picsum.photos/200)" }}
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: "url(http://picsum.photos/100)" }}
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: "url(http://picsum.photos/300)" }}
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: "url(http://picsum.photos/400)" }}
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: "url(http://picsum.photos/500)" }}
          ></SwiperSlide>
        </Swiper>
        <div className="text-black leading-6 w-full">
          <div className="flex justify-between items-center">
            <span className="font-bold">HoChiMinh, Viet Nam </span>
            <span className="flex justify-center items-center">
              4,68
              <StarIcon />
            </span>
          </div>
          <span>cách 3km</span> <br />
          <span>ngày 03 - ngày 08 tháng 7</span>
          <br />
          <span className="font-bold">$41/đêm</span>
        </div>
      </div>
    </div>
  );
}
