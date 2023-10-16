import { Button, Card, Col, Form, Input, Row, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./ProductForm.scss";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../constants/url-config";
import ButtonFeat from "../../../button-feat/ButtonFeat";
type Prop = {};
const ProductForm = (props: Prop) => {
  const handleFileUpload = (info: any) => {
    if (info.file.status === "done") {
      // Xử lý sau khi tệp được tải lên thành công
      console.log("Tệp đã được tải lên:", info.file);
    }
  };
  return (
    <>
      <Form
        name="basic"
        requiredMark={"optional"}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form__product"
      >
        <Row>
          <Col span={18}></Col>
          <Col span={6}></Col>
        </Row>
        <Card title="Thông tin sản phẩm" className="form__product__card">
          <Form.Item
            label="Tên sản phẩm"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên sản phẩm!",
              },
            ]}
          >
            <Input
              placeholder="Tên sản phẩm"
              className="form__product__card__input"
            />
          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mô tả!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Mô tả sản phẩm"
              className="form__product__card__input form__product__card__input--area"
            />
          </Form.Item>
        </Card>
        <Card title="Chi tiết sản phẩm" className="form__product__card">
          <Form.Item
            label="Danh mục"
            name="category"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn danh mục",
              },
            ]}
          >
            <Select
              placeholder="Chọn danh mục"
              className="form__product__card__select"
            >
              <Select.Option value="danhmuc1">Đồng hồ nam</Select.Option>
              <Select.Option value="danhmuc2">Đồng hồ nữ</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Thương hiệu"
            name="brand"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn thương hiệu",
              },
            ]}
          >
            <Select
              placeholder="Chọn thương hiệu"
              className="form__product__card__select"
            >
              <Select.Option value="thuonghieu1">Thương hiệu 1</Select.Option>
              <Select.Option value="thuonghieu2">Thương hiệu 2</Select.Option>
              <Select.Option value="thuonghieu3">Thương hiệu 3</Select.Option>
            </Select>
          </Form.Item>
        </Card>
        <Card title="Hình ảnh sản phẩm" className="form__product__card">
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item
                name="thumnail"
                label="Thumnail"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng tải lên thumnail.",
                  },
                ]}
              >
                <Upload
                  className="form__product__card__upload"
                  name="image"
                  action="/your-upload-api-endpoint"
                  onChange={handleFileUpload}
                >
                  <Upload.Dragger>
                    <p className="ant-upload-drag-icon">
                      <UploadOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Kéo và thả tệp ảnh vào đây hoặc click để tải lên
                    </p>
                  </Upload.Dragger>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="image"
                label="Ảnh chi tiết"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng tải lên ảnh chi tiêt.",
                  },
                ]}
              >
                <Upload
                  className="form__product__card__upload"
                  name="image"
                  action="/your-upload-api-endpoint"
                  onChange={handleFileUpload}
                >
                  <Upload.Dragger>
                    <p className="ant-upload-drag-icon">
                      <UploadOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Kéo và thả tệp ảnh vào đây hoặc click để tải lên
                    </p>
                  </Upload.Dragger>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Form.Item
      className="brand__form__buttonGroup">
 
        <ButtonFeat link={ROUTE_PATHS.Product}/>
      </Form.Item>
        
      </Form>
    </>
  );
};
export default ProductForm;
