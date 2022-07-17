import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Experience from "./pages/Home/Experience/Experience";
import OnlineExperience from "./pages/Home/OnlineExperience/OnlineExperience";
import Roomlist from "./pages/Roomlist/Roomlist";
import Details from "./pages/Details/Details";
import DetailsTemplate from "./templates/DetailTemplate/DetailTemplate";
import HotelList from "./pages/HotelList/HotelList";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Register from "./pages/Register/Register";
import QuanLyNguoiDung from "./pages/Admin/QuanLyNguoiDung/QuanLyNguoiDung";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import QuanLyViTri from "./pages/Admin/QuanLyViTri/QuanLyViTri";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/noio" component={Home} />
        <HomeTemplate path="/trainghiem" component={Experience} />
        <HomeTemplate
          path="/trainghiemtructuyen"
          component={OnlineExperience}
        />
        <HomeTemplate path="/danhsachphong/:id" component={Roomlist} />
        <HomeTemplate path="/hotellist/:locationId" component={HotelList} />
        <DetailsTemplate path="/chitietphong/:id" component={Details} />

        <UserTemplate path="/dangnhap" component={Login} />
        <UserTemplate path="/dangky" component={Register} />

        <Route exact path="/user" component={User} />

        <AdminTemplate path="/admin/quanlynguoidung" component={QuanLyNguoiDung} />
        <AdminTemplate path="/admin/quanlyvitri" component={QuanLyViTri} />

        <HomeTemplate path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
