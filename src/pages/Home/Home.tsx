import Carousel from "./Carousel/Carousel";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import {
  useDanhSachViTri,
  useSelectorQuanLyVe,
} from "../../redux/QuanLyVe/QuanLyVe.selector";
import _ from "lodash";
import axios from "axios";
import { quanLyVeService } from "../../service/QuanLyVeService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { quanLyVeAction } from "../../redux/QuanLyVe/QuanLyVe.reducer";
import { useHistory } from "react-router-dom";
import { quanLyPhongChoThueAction } from "../../redux/QuanLyPhongChoThue/QuanLyPhongChoThue.reducer";

type Props = {};

function Home(props: Props) {
  let history = useHistory();
  let { viTri } = useSelectorQuanLyVe();

  return (
    <div className="body-home container relative">
      <div className="search bg-white p-3 flex justify-center items-center">
        <div className="mr-5">
          <span className="font-bold pb-1">Đia điểm</span>
          <ComboBox />
        </div>
        <div
          className="flex flex-col pl-5 mr-5"
          style={{ borderLeft: "1px solid gray" }}
        >
          <span className="font-bold pb-1">Nhận phòng</span>
          <TextField
            id="outlined-basic"
            label="Thêm ngày"
            variant="outlined"
            className="w-44"
          />
        </div>
        <div
          className="flex flex-col pl-5 mr-5"
          style={{ borderLeft: "1px solid gray" }}
        >
          <span className="font-bold pb-1">Trả phòng</span>
          <TextField
            id="outlined-basic"
            label="Thêm ngày"
            variant="outlined"
            className="w-44"
          />
        </div>
        <div
          className="flex flex-col pl-5 mr-5"
          style={{ borderLeft: "1px solid gray" }}
        >
          <span className="font-bold pb-1">Khách</span>
          <TextField
            id="outlined-basic"
            label="Thêm khách"
            variant="outlined"
            className="w-52"
          />
        </div>
        <button
          className="p-2 mt-5 bg-pink-500 rounded-full"
          onClick={() => {
            history.push(`/danhsachphong/${viTri?._id}`);
          }}
        >
          <SearchIcon className="text-white" />
        </button>
      </div>
      <section className="carousel bg-black pt-8 pb-10">
        <Carousel />
        <p className="text-white text-center text-3xl pt-7">
          Nhờ có Host, mọi điều đều có thể ♥
        </p>
      </section>

      <Suggestions />
    </div>
  );
}

export default Home;

function Suggestions(props: Props) {
  return (
    <section
      className="suggestion my-14 wow animate__fadeInRight"
      data-wow-duration="1s"
      data-wow-delay="0s"
    >
      <h1 className="font-bold text-2xl mb-7 ml-28">
        Khám phá những điểm đến gần đây
      </h1>
      {/* khám phá những điểm đến gần đây */}
      <div className="suggestion-grid grid grid-cols-4 gap-8 max-w-7xl m-auto">
        <div className="suggestion-grid-content flex justify-start items-center">
          <img
            src="./img/Suggestions/tphcm.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thành Phố Hồ Chí Minh</h3>
            <span>15p lái xe</span>
          </div>
        </div>
        <div className="suggestion-grid-content flex justify-start items-center">
          <img
            src="./img/Suggestions/cantho.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Cần Thơ</h3>
            <span>3 giờ lái xe</span>
          </div>
        </div>
        <div className="suggestion-grid-content flex justify-start items-center">
          <img
            src="./img/Suggestions/nhatrang.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Nha Trang</h3>
            <span>6.5 giờ lái xe</span>
          </div>
        </div>
        <div className="suggestion-grid-content flex justify-start items-center">
          <img
            src="./img/Suggestions/phuquoc.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Phú Quốc</h3>
          </div>
        </div>
        <div className="suggestion-grid-content flex justify-start items-center">
          <img
            src="./img/Suggestions/tuyhoa.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thành Phố Tuy Hòa</h3>
            <span>7.5 giờ lái xe</span>
          </div>
        </div>
        <div className="suggestion-grid-content flex justify-start items-center">
          <img
            src="./img/Suggestions/bienhoa.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thành Phố Biên Hòa</h3>
            <span>45p lái xe</span>
          </div>
        </div>
        <div className="suggestion-grid-content flex justify-start items-center">
          <img
            src="./img/Suggestions/thuanan.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thị Xã Thuận An</h3>
            <span>30p lái xe</span>
          </div>
        </div>
        <div className="suggestion-grid-content flex justify-start items-center">
          <img
            src="./img/Suggestions/thapcham.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thành Phố Phan Rang</h3>
            <span>5 giờ lái xe</span>
          </div>
        </div>
      </div>
      {/* ở bức cứ đâu */}
      <div className="max-w-7xl m-auto">
        <h2 className="some-where font-bold text-2xl my-8 ">Ở bức cứ đâu</h2>
        <section className="someWhere-content flex">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="./img/Suggestions/nhadalat.jpg" />
              </div>
              <div className="contentBx">
                <br />
                <h3>Toàn Bộ Nhà</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="./img/Suggestions/nhatrencay.jpg" />
              </div>
              <div className="contentBx">
                <br />
                <h3>Chỗ ở độc đáo</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="./img/Suggestions/trangtrai.jpg" />
              </div>
              <div className="contentBx">
                <br />
                <h3>Trang trại và thiên nhiên</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="./img/Suggestions/cho.jpg" />
              </div>
              <div className="contentBx">
                <br />
                <h3>Cho phép mang thú cưng</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export function ComboBox(props: Props) {
  let dispatch = useDispatch<any>();
  let [dsViTri, setDanhSachViTri] = useState<any>([]);
  useEffect(() => {
    const getDanhSachViTri = createAsyncThunk(
      "QuanLyVe/getThongTinChiTietVe",
      async (params, { dispatch }) => {
        try {
          const result = await quanLyVeService.LayDanhSachViTri();
          if (result.status === 200) {
            setDanhSachViTri(result.data);
            dispatch(quanLyVeAction.danhSachViTri(result.data));
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
    dispatch(getDanhSachViTri());
  }, []);

  return (
    <Autocomplete
      disablePortal
      onChange={(_, val) => {
        dispatch(quanLyVeAction.setViTri(val));
        dispatch(
          quanLyPhongChoThueAction.updateFilter({
            key: "locationId",
            value: val._id,
          })
        );
      }}
      // onInputChange={val => console.log({val})}
      id="ds-vi-tri"
      getOptionLabel={(dsViTri: any) => `${dsViTri.name}`}
      options={dsViTri}
      sx={{ width: 300 }}
      isOptionEqualToValue={(option: any, value: any) =>
        option.name === value.name
      }
      noOptionsText="không tìm thấy nơi ở"
      renderOption={(props, dsViTri): any => (
        <Box className="z-20" component="li" {...props} key={dsViTri.id}>
          {dsViTri.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Nơi bạn muốn đến" />
      )}
    />
  );
}
