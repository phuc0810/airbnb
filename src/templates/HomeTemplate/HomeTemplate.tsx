import React, { FC, ReactNode } from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import HeaderRoomlist from "../../pages/Roomlist/Header/HeaderRoomlist";
import Footer from "../../pages/_Components/Footer/Footer";
import Header from "../../pages/_Components/Header/Header";

type Props = {
  component: React.ElementType;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
  path: string;
};
export default function HomeTemplates(props: Props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        let header = <Header />;
        if (props.path === "/danhsachphong/:id") {
          header = <HeaderRoomlist />;
        }
        return (
          <div>
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
