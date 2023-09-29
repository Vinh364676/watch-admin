import { Button } from "antd";
import BreadcrumbHeader from "../breadcrumb/Breadcrumb";
import "./Title.scss";
import {
    UserAddOutlined
  } from '@ant-design/icons';
import { Link } from "react-router-dom";
type Prop={
    title:string;
    isPrimary?:boolean;
    to?: string;
}
const TitleComponent = ({title, isPrimary=true, to}:Prop) => {
    return(
        <div className="titleComponent">
        <div>
        <h5 className="title">{title}</h5>
        <BreadcrumbHeader/>
        </div>
        {isPrimary && to ? ( // Check if both isPrimary and to are truthy
        <Link to={to}>
          <Button className="button__Custom"><UserAddOutlined />Tạo mới</Button>
        </Link>
      ) : (
        isPrimary && <Button className="button__Custom"><UserAddOutlined />Tạo mới</Button>
      )}
        </div>
    );
}
export default TitleComponent;