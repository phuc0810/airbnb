import React, { FC, ReactNode, useEffect, useState } from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import HeaderRoomlist from "../../pages/Roomlist/Header/HeaderRoomlist";
import Footer from "../../pages/_Components/Footer/Footer";
import Header from "../../pages/_Components/Header/Header";
import HeaderMobile from "../../pages/_Components/HeaderMobile/HeaderMobile";

type Props = {
  component: React.ElementType;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
  path: string;
};
export default function HomeTemplates(props: Props) {
  const [widthHeight, setWidthHeight] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onload = (event: Event) => {
    console.log("window onload!", event);
  };

  const onresize = (event: Event) => {
    console.log("window onresize!", event);
  };

  useEffect(() => {
    window.onload = () => {
      //bắt sự kiện windowload
      setWidthHeight({ width: window.innerWidth, height: window.innerHeight });
    };
    window.onresize = () => {
      setWidthHeight({ width: window.innerWidth, height: window.innerHeight });
    };
    return () => {
      window.removeEventListener("onload", onload);
      window.removeEventListener("onresize", onresize);
    };
  }, []);
  console.log("width", widthHeight.width);
  console.log("height", widthHeight.height);

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        let header = <Header />;
        if (
          props.path === "/danhsachphong/:id" ||
          props.path === "/hotellist/:locationId"
        ) {
          header = <HeaderRoomlist />;
        } else if (widthHeight.width <= 992) {
          header = <HeaderMobile />;
        }

        return (
          <div className="home-template">
            {header}
            <props.component {...propsRoute} />
            <hr className="mt-5" />
            <Footer />
          </div>
        );
      }}
    />
  );
}
