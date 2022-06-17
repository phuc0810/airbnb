import React, { FC, ReactNode } from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import HeaderDetail from "../../pages/_Components/HeaderDetails/HeaderDetail";

type Props = {
  component: React.ElementType;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
  path: string;
};
export default function DetailsTemplate(props: Props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div>
            <HeaderDetail />
            <props.component {...propsRoute} />
          </div>
        );
      }}
    />
  );
}
