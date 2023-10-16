import { Button } from "antd";
import BreadcrumbHeader from "../breadcrumb/Breadcrumb";
import "./ButtonCustom.scss";
import {
    UserAddOutlined
  } from '@ant-design/icons';
import { Link } from "react-router-dom";
type Prop={
    icon:any
    title:string
}
const ButtonCustom = ({icon,title}:Prop) => {
    return(
        <Button className="buttonCustom">{icon}{title}</Button>
    );
}
export default ButtonCustom;