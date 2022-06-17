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
        <HomeTemplate path="/hotellist/:province" component={HotelList} />
        <DetailsTemplate path="/chitietphong/:id" component={Details} />

        <HomeTemplate path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
