import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Accommodation from "./pages/Home/Accommodation/Accommodation";
import Experience from "./pages/Home/Experience/Experience";
import OnlineExperience from "./pages/Home/OnlineExperience/OnlineExperience";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/noio" component={Accommodation} />
        <HomeTemplate path="/trainghiem" component={Experience} />
        <HomeTemplate
          path="/trainghiemtructuyen"
          component={OnlineExperience}
        />

        <HomeTemplate path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
