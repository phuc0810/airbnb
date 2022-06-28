import React, { Fragment } from "react";
import { Route } from "react-router-dom";

type Props = {
  component: React.ElementType;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
  path: string;
};

function UserTemplate(props: Props) {
  return (
    <Route
      exact
      path={props.path}
      render={() => {
        return (
          <Fragment>
            <section className="h-screen">
              <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                  <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      className="w-full"
                      alt="Sample image"
                    />
                  </div>
                  <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                    <props.component />
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        );
      }}
    />
  );
}

export default UserTemplate;
