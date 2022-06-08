import React from "react";
import {
  BarsOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { ComboBox } from "../../Home/Home";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

type Props = {};

function HeaderRoomlist({}: Props) {
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-black text-white w-full z-10 ">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2 "
        >
          <NavLink to="/" className="flex justify-center items-center">
            <SketchOutlined className="text-6xl" />{" "}
            <span className="text-3xl">airbnb</span>
          </NavLink>
        </NavLink>
        {/* search */}
        <div
          className="bg-white p-3 flex justify-center items-center"
          style={{ padding: "36px 21px", borderRadius: "26px" }}
        >
          <div className="mr-5">
            <ComboBox />
          </div>
          <div
            className="flex flex-col pl-5 mr-5"
            style={{ borderLeft: "1px solid gray" }}
          >
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
            <TextField
              id="outlined-basic"
              label="Thêm khách"
              variant="outlined"
              className="w-52"
            />
          </div>
          <button className="p-2 bg-pink-500 rounded-full">
            <SearchIcon className="text-white" />
          </button>
        </div>
        <div className="items-center justify-center flex-shrink-0 hidden lg:flex">
          <div>
            <NavLink to="/trainghiem">Đón tiếp khách</NavLink>
            <span className="ml-3">
              <GlobalOutlined />
            </span>
          </div>
          <div className="p-3 bg-white text-black rounded-3xl mx-5">
            <NavLink to="trainghiemtructuyen" className="mx-2">
              <BarsOutlined />
            </NavLink>
            <NavLink to="" className="mx-2">
              <Stack spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Stack>
            </NavLink>
          </div>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default HeaderRoomlist;
