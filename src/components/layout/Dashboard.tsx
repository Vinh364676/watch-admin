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
  ShoppingCartOutlined,
  SettingOutlined,
  ShoppingOutlined,
  MessageOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  RocketOutlined,
  NodeCollapseOutlined,
  NodeExpandOutlined
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Col,
  Dropdown,
  Input,
  Layout,
  Menu,
  Popover,
  Row,
} from "antd";
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
  const content = (
    <div>
<div className="popover__content">
      <div className="popover__content__left">
      <div className="popover__content--cricle"></div>
      <div>
      <p>Phạm Quang Vinh</p>
      <p>Thông báo abcder</p>
      </div>
      </div>
      <div>
        2hr
      </div>
    </div>
    <div className="popover__content">
      <div className="popover__content__left">
      <div className="popover__content--cricle"></div>
      <div>
      <p>Phạm Quang Vinh</p>
      <p>Thông báo abcder</p>
      </div>
      </div>
      <div>
        2hr
      </div>
    </div>
    <div className="popover__content">
      <div className="popover__content__left">
      <div className="popover__content--cricle"></div>
      <div>
      <p>Phạm Quang Vinh</p>
      <p>Thông báo abcder</p>
      </div>
      </div>
      <div>
        2hr
      </div>
    </div>
    </div>
    
    
  );
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu
          className="menu__dashboard"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <Link to={ROUTE_PATHS.Home}>Trang chủ</Link>,
            },
            {
              key: "2",
              icon: <AppstoreOutlined />,
              label: "Tính năng",
              children:[
                {
                  key: "2.1",
                  label: <Link to={ROUTE_PATHS.Product}>Sản phẩm</Link>,
                  className: "menu__dashboard--label",
                },
                {
                  key: "2.2",
                  label: <Link to={ROUTE_PATHS.Brand}>Thương hiệu</Link>,
                  className: "menu__dashboard--label",
                },
                {
                  key: "2.3",
                  label: <Link to={ROUTE_PATHS.Home}>Danh mục</Link>,
                  className: "menu__dashboard--label",
                },
                {
                  key: "2.4",
                  label: <Link to={ROUTE_PATHS.Home}>Khác</Link>,
                  className: "menu__dashboard--label",
                },
              ]
            },
            {
              key: "3",
              icon: <ShoppingCartOutlined />,
              label: <Link to={ROUTE_PATHS.Order}>Đơn hàng</Link>,
            },
           
            {
              key: "4",
              icon: <UserOutlined />,
              label: <Link to={ROUTE_PATHS.User}>Người dùng</Link>,
            },
            {
              key: "5",
              icon: <MessageOutlined />,
              label: <Link to={ROUTE_PATHS.User}>Liên hệ</Link>,
            },

            {
              key: "6",
              icon: <LogoutOutlined />,
              label: <Link to={ROUTE_PATHS.User}>Đăng xuất</Link>,
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
                  collapsed ? NodeCollapseOutlined  : NodeExpandOutlined,
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
                  <Popover placement="bottomRight" content={content} title="Notifications (3)" className="layout__header__popover" style={{width:400}}>
                    <Button type="primary">
                      <MailOutlined />
                    </Button>
                  </Popover>
                </Badge>
                <Button className="layout__header__buttonCustom">
                  <BellOutlined />
                </Button>
                <Avatar size="default" icon={<UserOutlined />}>
        
                  </Avatar> 
              
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
