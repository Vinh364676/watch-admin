import { Button, Form, Input, message, notification } from "antd";
import { Link, useHistory, useParams } from "react-router-dom";
import ButtonCustom from "../../../button-custom/ButtonCustom";
import "./BrandForm.scss";
import { ROUTE_PATHS } from "../../../../constants/url-config";
import { dispatch, useDispatch, useSelector } from "../../../../redux/store";
import { createBrand, getByIdBrand } from "../../../../redux/slices/brand";
import { useEffect, useState } from "react";

type Prop={
    isPrimary?:boolean;
}
const BrandForm = ({isPrimary=false}:Prop) => {
    const brandList = useSelector(state=> state.brand);
    const { brandDetail } = useSelector((state) => state.brand);
    console.log("brandDetail.name:", brandDetail.name);
     
  const params = useParams<{id: any}>()
  useEffect(()=> {
    if(params) {
      dispatch(getByIdBrand(params.id))
    }
  }, [params])

    const history = useHistory();
  const [isBrandNameValid, setIsBrandNameValid] = useState(true);
    const onFinish = (values: any) => {
        const brandListArray = Array.from(brandList.brandList);
        const isNameExists = brandListArray.some((brand) => brand.name === values.name);
        if (isNameExists) {
          setIsBrandNameValid(false);
          notification.error({
            className: "notification__item notification__item--error",
            message: 'Tên thương hiệu đã tồn tại',
            duration: 3,
          });
        } else {
          dispatch(createBrand(values));
          notification.success({
            className: "notification__item",
            message: 'Tạo mới thành công',
            duration: 3,
          });
          history.push("/brand");
        }
      };
      

    return(
  <Form
  className="brand__form"
      name="basic"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="name"
    
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên thương hiệu!',
          },
        ]}
      >
        <Input placeholder="Tên thương hiệu" className="brand__form__input" value={brandDetail.id}/>  
        
      </Form.Item>
      <Form.Item
      className="brand__form__buttonGroup">
      <Button type="primary" htmlType="button" className="brand__form__buttonGroup__button brand__form__buttonGroup__button--cancel">
          <Link to={ROUTE_PATHS.Brand}>Quay lại</Link>
          
        </Button>
      <Button type="primary" htmlType="submit" className="brand__form__buttonGroup__button ">
          Tạo mới
        </Button>
      </Form.Item>
      
    </Form>
    );

}   
export default BrandForm;