import { RouteChildrenProps } from "react-router";
import TitleComponent from "../../../components/titleComponent/Title";
import { LayoutProps } from "antd";
import ProductForm from "../../../components/views/product/product-create/ProductForm";

interface Props extends RouteChildrenProps, LayoutProps { }

export default function EditProduct(props: Props) {
  return (
    <h1 className="homepage" >
        <TitleComponent title="Chỉnh sửa sản phẩm" isPrimary={false}/>
        <ProductForm/>
    </h1>
  )
}
