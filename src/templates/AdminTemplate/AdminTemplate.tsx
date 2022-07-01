import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { USER_LOGIN } from "../../@types/XacThucNguoiDung/XacThucNguoiDung";

// ---------------------------------------------------------------------------------
type Props = {
  component: React.ElementType;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
  path: string;
};
export default function AdminTemplate(props: Props) {
  let history = useHistory();

  const { Header, Content, Footer, Sider } = Layout;

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Redirect to="/" />;
  }

    // if (thongTinDangNhap?.type !== "ADMIN") {
    //   alert("Bạn không có quyền truy cập vào trang này !");
    //   return <Redirect to="/" />;
    // }

  // const operations = (
  // <Fragment>
  //   {!_.isEmpty(thongTinDangNhap) ? (
  //     <Fragment>
  //       <button
  //         onClick={() => {
  //           history.push("/profile");
  //         }}
  //       >
  //         <div
  //           style={{
  //             width: 50,
  //             height: 50,
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //           }}
  //           className="text-2xl ml-5 rounded-full bg-red-200"
  //         >
  //           {thongTinDangNhap?.user}
  //         </div>
  //         Hello ! {thongTinDangNhap?.user}
  //       </button>{" "}
  //       <button
  //         onClick={() => {
  //           localStorage.removeItem(USER_LOGIN);
  //           localStorage.removeItem(TOKEN_CYBERSOFT);
  //           history.push("/home");
  //           window.location.reload();
  //         }}
  //         className="text-blue-800"
  //       >
  //         Đăng xuất
  //       </button>{" "}
  //     </Fragment>
  //   ) : (
  //     ""
  //   )}
  // </Fragment>
  // );
  return (
    <Route
      exact
      path={props.path}
      render={() => {
        return (
          <Layout style={{ minHeight: "100vh" }} className='AdminTemplate'>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
              />
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <props.component />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
