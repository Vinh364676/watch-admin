import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  HomeOutlined,
  MailOutlined,
  BellOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Col, Input, Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import logo from "../../assets/icon/logo.png";
import "./Dashboard.scss";
import { ROUTE_PATHS } from "../../constants/url-config";
import { Link, NavLink } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Dashboard = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to={ROUTE_PATHS.Home}>Dashboard</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label:  <Link to={ROUTE_PATHS.Order}>Order</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />

      </Sider>
      <Layout className="layout">
        <div className="layout__dashboard">
          <Header
            className="layout__header containerCustom"
            style={{
              padding: 0,
            }}
          >
            <div className="layout__header--row">
              <div className="layout__header--menu">
                {React.createElement(
                  collapsed ? RightCircleOutlined : LeftCircleOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </div>
              <div className="layout__header--search">
                <Input
                  className="layout__header--search--input"
                  allowClear={true}
                  placeholder="Type to search"
                  prefix={<SearchOutlined />}
                />
              </div>
              <div className="layout__header--icon">
                <Badge count={5}>
                  <Button className="layout__header__buttonCustom">
                    <MailOutlined />
                  </Button>
                </Badge>
                <Button className="layout__header__buttonCustom">
                  <BellOutlined />
                </Button>
                <Avatar size="default" icon={<UserOutlined />} />
              </div>
            </div>
          </Header>
          <main className="main__layout">{children}</main>
        </div>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
