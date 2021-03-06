import React, { useEffect, useState, lazy, useRef } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {
  useDispatchNavList,
  useSelectorQuanLyVe,
} from "../../redux/QuanLyVe/QuanLyVe.selector";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store/rootReducer";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DanhSachViTri } from "../../@types/QuanLyVe/QuanLyVe";
import { useHistory } from "react-router-dom";

type Props = {};

function Roomlist({}: Props) {
  // const { navList } = useDispatchNavList();
  // const [state, setState] = useState("Thang máy");
  // const ref = useRef<HTMLDivElement>(null);
  let { danhSachViTri, viTri } = useSelectorQuanLyVe();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 50) {
  //       ref.current?.classList.add("scroll");
  //     } else {
  //       ref.current?.classList.remove("scroll");
  //     }
  //   });
  // }, []);

  return (
    <div
      className="Roomlist container max-w-7xl mx-auto relative"
      style={{ top: "120px" }}
    >
      {/* //*menu bar  */}
      {/* <div
        className="menu grid grid-cols-10 text-center sticky bg-white"
        style={{ top: "98px", zIndex: "3" }}
        ref={ref}
      >
        {navList?.map((item, i) => {
          let classActiveBtn = state === item.name ? "activeNav" : "";
          return (
            <div>
              <button
                key={i}
                disabled={state === item.name}
                className={`${classActiveBtn}`}
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
      </div> */}
      {/* //nguyên cái phần này tạo component riêng dưa qua header, cái list card thì liên quan gì tới cái menu mà nó nằm chugn ở đay v */}
      {/* //* giao diện phòng  */}
      <div className="roomList-grid grid grid-cols-4 mt-10 mb-14 gap-9">
        {danhSachViTri
          ?.filter((item) => item._id === viTri?._id)
          .map((item, i) => {
            return <Card item={item} key={i} />;
          })}
      </div>
    </div>
  );
}

export default Roomlist;

function Card(props: Card) {
  let { name, image, province, valueate, _id, country } = props.item;
  let history = useHistory();
  return (
    <div
      className="swiper-roomList"
      style={{ height: "500px", position: "relative", cursor: "pointer" }}
    >
      <IconButton
        aria-label="add to favorites"
        style={{
          top: "10px",
          right: "10px",
          position: "absolute",
          zIndex: "2",
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
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/hotellist/${_id}`);
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/hotellist/${_id}`);
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/hotellist/${_id}`);
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/hotellist/${_id}`);
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/hotellist/${_id}`);
          }}
        ></SwiperSlide>
      </Swiper>
      <div
        className="text-black leading-6 w-full mt-3"
        onClick={() => {
          history.push(`/hotellist/${_id}`);
        }}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold">
            {country},{province}
          </span>
          <span className="flex justify-center items-center">
            {valueate}
            <StarIcon />
          </span>
        </div>
        <span>cách 3km</span> <br />
        <span>ngày 03 - ngày 08 tháng 7</span>
        <br />
        <span className="font-bold">$41/đêm</span>
      </div>
    </div>
  );
}

interface Card {
  item: DanhSachViTri;
}
