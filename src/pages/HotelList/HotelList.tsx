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
import { DanhSachViTri, NavList } from "../../@types/QuanLyVe/QuanLyVe";
import { useHistory, useParams } from "react-router-dom";
import {
  useDispatchHotelList,
  useQuanLyPhongChoThue,
} from "../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.selector";
import { DSHotel } from "../../@types/QuanLyPhongChoThue/QuanLyPhongChoThue";
import { quanLyPhongChoThueAction } from "../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.reducer";
import CardSkeleton from "./CardSkeleton/CardSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import { paginateHotelList } from "../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.thunk";
import PaginationMui from "@mui/material/Pagination";

type Props = {};

function HotelList(props: Props) {
  let dispatch = useDispatch<any>();
  // *menu Bar
  let { LoadingMenuBar } = useSelectorQuanLyVe();
  const { navList } = useDispatchNavList();
  const [state, setState] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  // *danh sach hotel
  let { viTri } = useSelectorQuanLyVe();
  let { hotelList } = useDispatchHotelList();
  let { changeHotelList, isLoading, filter } = useQuanLyPhongChoThue();
  console.log("change list", changeHotelList);
  console.log(isLoading);
  let { locationId } = useParams<{ locationId: string }>();
  
 

  useEffect(() => {
    dispatch(
      quanLyPhongChoThueAction.updateFilter({
        key: "locationId",
        value: locationId,
      })
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        ref.current?.classList.add("scroll");
      } else {
        ref.current?.classList.remove("scroll");
      }
    });
  }, []);

  return (
    <div
      className="Roomlist container max-w-7xl mx-auto mt-28"
      style={{ top: "120px" }}
    >
      {/* //!menu bar  */}
      <div
        className="menu grid grid-cols-10 text-center sticky bg-white"
        style={{ top: "98px", zIndex: "3" }}
        ref={ref}
      >
        {navList?.map((item, i) => {
          let classActiveBtn = state === item.nameID ? "activeNav" : "";
          return (
            <div key={i}>
              <button
                key={i}
                disabled={state === item.nameID}
                className={`${classActiveBtn}`}
                onClick={() => {
                  setState(item.nameID);
                  dispatch(
                    quanLyPhongChoThueAction.changeHotelList(item.nameID)
                  );
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={item.icon}
                    alt={item.icon}
                    style={{ height: "45px" }}
                  />
                  <span className="font-bold">{item.name}</span>
                </div>
              </button>
            </div>
          );
        })}
      </div>
      {/* //nguyên cái phần này tạo component riêng dưa qua header, cái list card thì liên quan gì tới cái menu mà nó nằm chugn ở đay v */}
      {/* //* giao diện phòng  */}
      <div className="grid grid-cols-4 mt-10 gap-9">
        {isLoading ? (
          changeHotelList
            ?.filter((item) => item.locationId?.province === viTri?.province)
            .map((item, i) => {
              return <Card item={item} isLoading={isLoading} key={i} />;
            })
        ) : (
          <CardSkeleton cards={24} />
        )}
        {/* <CardSkeleton cards={24} /> */}
      </div>
      <PaginationReact />
    </div>
  );
}

export default HotelList;

function Card(props: Card) {
  let {
    name,
    description,
    price,
    locationId,
    bath,
    bedRoom,
    cableTV,
    gym,
    hotTub,
    heating,
    guests,
    image,
    pool,
    wifi,
    kitchen,
    indoorFireplace,
    elevator,
    dryer,
    _id,
  } = props.item;
  let { isLoading } = props;

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
        <FavoriteIcon className="text-black" />
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
            history.push(`/chitietphong/${_id}`);
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/chitietphong/${_id}`);
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/chitietphong/${_id}`);
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/chitietphong/${_id}`);
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            history.push(`/chitietphong/${_id}`);
          }}
        ></SwiperSlide>
      </Swiper>
      <div
        className="text-black leading-6 w-full"
        onClick={() => {
          history.push(`/chitietphong/${_id}`);
        }}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold">{name}</span>
          <span className="flex justify-center items-center">
            {/* {} */}
            <StarIcon />
          </span>
        </div>
        <span>cách 3km</span> <br />
        <span>ngày 03 - ngày 08 tháng 7</span>
        <br />
        <span className="font-bold">{price?.toLocaleString()}/đêm</span>
      </div>
    </div>
  );
}

interface Card {
  item: DSHotel;
  isLoading: boolean;
}

function PaginationReact(props: PaginationReact) {
  let dispatch = useDispatch<any>();
  let handlePageClick = async (data: { selected: number }) => {
    console.log(data.selected);
    dispatch(
      quanLyPhongChoThueAction.updateFilter({
        key: "page",
        value: data.selected,
      })
    );
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center"}
        pageClassName={""}
        pageLinkClassName={
          "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        previousClassName={"page-item"}
        previousLinkClassName={
          "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        nextClassName={"page-item"}
        nextLinkClassName={
          "py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"bg-rt"}
      />
    </div>
  );
}
interface PaginationReact {}
