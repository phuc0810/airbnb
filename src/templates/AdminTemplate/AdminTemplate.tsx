import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import _ from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Redirect, Route, useHistory } from "react-router-dom";
import {
  ACCESSTOKEN,
  USER_LOGIN,
} from "../../@types/XacThucNguoiDung/XacThucNguoiDung";
import { useSelectorXacThucNguoiDung } from "../../redux/XacThucNguoiDung/XacThucNguoiDung.selector";

const { Header, Content, Footer, Sider } = Layout;

// ---------------------------------------------------------------------------------
type Props = {
  component: React.ElementType;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
  path: string;
};
export default function AdminTemplate(props: Props) {
  let history = useHistory();
  let { userLogin } = useSelectorXacThucNguoiDung();

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
    getItem(
      <NavLink to={"/admin/quanlynguoidung"}>QL Người Dùng</NavLink>,
      "1",
      <PieChartOutlined />
    ),
    getItem(
      <NavLink to={"/admin/quanlyvitri"}>QL Vị Trí</NavLink>,
      "2",
      <DesktopOutlined />
    ),
    getItem(
      <NavLink to={"/admin/quanlyphong"}>QL Vị Phòng</NavLink>,
      "3",
      <DesktopOutlined />
    ),
  ];

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Redirect to="/" />;
  }

  if (userLogin?.type !== "ADMIN") {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Redirect to="/" />;
  }

  const operations = (
    <Fragment>
      {!_.isEmpty(localStorage.getItem(USER_LOGIN)) ? (
        <Fragment>
          <button
            onClick={() => {
              history.push("/profile");
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-2xl ml-5 rounded-full bg-red-200"
            >
              {userLogin?.name?.substring(0, 1)}
            </div>
          </button>
          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(ACCESSTOKEN);
              history.push("/home");
              window.location.reload();
            }}
            className="text-blue-800"
          >
            Đăng xuất
          </button>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
  return (
    <Route
      exact
      path={props.path}
      render={() => {
        return (
          <Layout style={{ minHeight: "100vh" }}>
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
              <Header className="site-layout-background" style={{ padding: 0 }}>
                <div className="text-right pr-10 pt-1">{operations}</div>
              </Header>
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
