import React from "react";
import "./Breadcrumb.scss";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import useResponsive from "../../hooks/useResponsive";

const BreadcrumbHeader = () => {
  const { isMobile } = useResponsive();
  const location = useLocation();

  // Check if isMobile exists before rendering
  const updateBreadcrumb = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    return (
      <div
        data-aos="fade-right"
        data-aos-duration="200"
        className="breadcrumb"
      >
        <Breadcrumb separator={<span className="dot">•</span>}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          {pathnames.map((item, index) => (
            <Breadcrumb.Item key={index}>
              <Link to={`/${item}`}>{item}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    );
  };

  return <>{updateBreadcrumb()}</>;
};

export default BreadcrumbHeader;
