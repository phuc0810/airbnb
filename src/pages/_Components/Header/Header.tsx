import React from "react";
import {
  BarsOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

type Props = {};

function Header(props: Props) {
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
            <SketchOutlined className="text-6xl" /> <span className="text-3xl">airbnb</span>
          </NavLink>
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/noio"
              className="a-header flex flex-col items-center justify-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 hover:text-yellow-500 border-none"
              activeClassName="text-yellow-500"
            >
              Nơi ở
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/trainghiem"
              className="a-header flex flex-col items-center justify-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 hover:text-yellow-500 border-none"
              activeClassName="text-yellow-500"
            >
              Trải nghiệm
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/trainghiemtructuyen"
              className="a-header flex flex-col items-center justify-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 hover:text-yellow-500 border-none"
              activeClassName="text-yellow-500"
            >
              Trải nghiệm trực tuyến
            </NavLink>
          </li>
        </ul>
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
              <ShoppingCartOutlined />
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

export default Header;
