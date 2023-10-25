import { Button, Card, Col, Form, Input, Row, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./ProductForm.scss";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../constants/url-config";
import ButtonFeat from "../../../button-feat/ButtonFeat";
import { dispatch, useSelector } from "../../../../redux/store";
import { useEffect, useState } from "react";
import { getBrand } from "../../../../redux/slices/brand";
import { getCategory } from "../../../../redux/slices/category";
import { useForm } from "antd/lib/form/Form";
import { createProduct } from "../../../../redux/slices/product";
import axios from "axios";
type Prop = {
  isEdit?: boolean;
};
const ProductForm = ({ isEdit = false }: Prop) => {
  const { brandList } = useSelector((state) => state.brand);
  const { categoryList } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(
      getBrand({
        pageIndex: 1,
        pageSize: 100,
      })
    );
  }, []);
  useEffect(() => {
    dispatch(
      getCategory({
        pageIndex: 1,
        pageSize: 100,
      })
    );
  }, []);

  const handleCreateNew = () => { };
  const [form] = Form.useForm();
  const onFinish = (formData: any) => {
    const formDataSubmit = new FormData();
    formDataSubmit.append('size', '10mm'); // For non-file data
    formDataSubmit.append('thumNail', formData.thumbnail); // For non-file data
    console.log(typeof formData.thumbnail);
    

    axios.post('https://localhost:7199/api/Product/Create', formDataSubmit)
  .then((response) => {
    // Handle the success response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });
    console.log(formData)
    // Dispatch the createProduct action with the product data


    // dispatch(createProduct(formData))
    //   .unwrap()
    //   .then((response) => {
    //     // Handle success, e.g., redirect to a success page or show a success message
    //     console.log("Product created successfully:", response);
    //   })
    //   .catch((error) => {
    //     // Handle error, e.g., display error messages
    //     console.error("Error creating product:", error);
    //   });
  };
  const [arrFile, setArrFile] = useState<any[]>([]);
  console.log(arrFile)
  return (
    <>
      <Form
        form={form}
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
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form__product"
      >
        <Card title="Thông tin sản phẩm" className="form__product__card">
          <Row gutter={[20, 0]}>
            <Col span={12}>
              <Form.Item
                label="Tên sản phẩm"
                name="productName"
                rules={[
                  {
                    required: false,
                    message: "Vui lòng nhập tên sản phẩm!",
                  },
                  {
                    pattern: /^[a-zA-Z]+[a-zA-Z0-9\s]*$/,
                    message:
                      "Tên sản phẩm không được bắt đầu bằng số hoặc ký tự đặc biệt!",
                  },
                ]}
              >
                <Input
                  placeholder="Tên sản phẩm"
                  className="form__product__card__input"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Row gutter={[20, 0]}>
                <Col xl={12}>
                  <Form.Item
                    label="Trạng thái"
                    name="status"
                    rules={[
                      {
                        required: false,
                        message: "Vui lòng chọn trạng thái sản phẩm!",
                      },
                    ]}
                  >
                    <Select
                      className="form__product__card__select"
                      placeholder="Chọn trạng thái sản phẩm"
                    >
                      <Select.Option value="available">
                        Sản phẩm mới
                      </Select.Option>
                      <Select.Option value="out_of_stock">
                        Bán chạy
                      </Select.Option>
                      <Select.Option value="discontinued">
                        Giảm giá
                      </Select.Option>
                      <Select.Option value="discontinued" disabled>
                        Hết hàng
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xl={12}>
                  <Form.Item
                    label="Giới tính"
                    name="gender"
                    rules={[
                      {
                        required: false,
                        message: "Vui lòng chọn giới tính!",
                      },
                    ]}
                    dependencies={["price"]}
                  >
                    <Select
                      className="form__product__card__select"
                      placeholder="Chọn giới tính"
                    >
                      <Select.Option value="male">Nam</Select.Option>
                      <Select.Option value="female">Nữ</Select.Option>
                      <Select.Option value="all">Tất cả</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[20, 0]}>
            <Col xl={12}>
              <Form.Item
                label="Mô tả"
                name="description"
                rules={[
                  {
                    required: false,
                    message: "Vui lòng nhập mô tả!",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Mô tả sản phẩm"
                  className="form__product__card__input form__product__card__input--area"
                />
              </Form.Item>
            </Col>
            <Col xl={12}>
              <Row gutter={[20, 0]}>
                <Col span={12}>
                  <Form.Item
                    label="Giá"
                    name="price"
                    rules={[
                      {
                        required: false,
                        message: "Vui lòng nhập giá sản phẩm!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || /^[0-9]+$/.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject("Giá sản phẩm phải là số!");
                        },
                      }),
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || value >= 0) {
                            return Promise.resolve();
                          }
                          return Promise.reject("Giá sản phẩm không được âm!");
                        },
                      }),
                    ]}
                    dependencies={["price"]}
                  >
                    <Input
                      placeholder="Giá sản phẩm"
                      className="form__product__card__input"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Số lượng"
                    name="quantity"
                    rules={[
                      {
                        required: false,
                        message: "Vui lòng nhập số lượng sản phẩm!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || /^[0-9]+$/.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Số lượng sản phẩm phải là số!"
                          );
                        },
                      }),
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || value >= 0) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Số lượng sản phẩm không được âm!"
                          );
                        },
                      }),
                    ]}
                    dependencies={["price"]}
                  >
                    <Input
                      placeholder="Số lượng sản phẩm"
                      className="form__product__card__input"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Kích thước"
                    name="size"
                    rules={[
                      {
                        required: false,
                        message: "Vui lòng nhập kích thước sản phẩm!",
                      },
                      {
                        validator: (rule, value) => {
                          const regex = /^[0-9]{2,3}(mm)$/;
                          if (regex.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Kích thước sản phẩm không hợp lệ. Ví dụ: 30mm,100mm..."
                          );
                        },
                      },
                    ]}
                  >
                    <Input
                      placeholder="Kích thước sản phẩm"
                      className="form__product__card__input"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Màu sắc"
                    name="color"
                    rules={[
                      {
                        required: false,
                        message: "Vui lòng nhập màu sắc sản phẩm!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || /^[0-9]+$/.test(value)) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Số lượng sản phẩm phải là số!"
                          );
                        },
                      }),
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || value >= 0) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Số lượng sản phẩm không được âm!"
                          );
                        },
                      }),
                    ]}
                    dependencies={["price"]}
                  >
                    <Input
                      placeholder="Số lượng sản phẩm"
                      className="form__product__card__input"
                    />
                  </Form.Item>
                  <Form.Item
                    label="code"
                    name="code"
                    rules={[
                      {
                        required: false,
                        message: "Vui lòng nhập màu sắc sản phẩm!",
                      },

                    ]}

                  >
                    <Input
                      placeholder="Code sản phẩm"
                      className="form__product__card__input"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card title="Chi tiết sản phẩm" className="form__product__card">
          <Row gutter={[20, 0]}>
            <Col xl={12}>
              <Form.Item
                label="Danh mục"
                name="category"
                rules={[
                  {
                    required: false,
                    message: "Vui lòng chọn danh mục",
                  },
                ]}
              >
                <Select
                  placeholder="Chọn danh mục"
                  className="form__product__card__select"
                >
                  {categoryList.map((category) => (
                    <Select.Option key={category.id} value={category.id}>
                      {category.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xl={12}>
              <Form.Item
                label="Thương hiệu"
                name="brand"
                rules={[
                  {
                    required: false,
                    message: "Vui lòng chọn thương hiệu",
                  },
                ]}
              >
                <Select
                  placeholder="Chọn thương hiệu"
                  className="form__product__card__select"
                >
                  {brandList.map((brand) => (
                    <Select.Option key={brand.id} value={brand.id}>
                      {brand.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title="Hình ảnh sản phẩm" className="form__product__card">
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item
                name="thumbnail"
                label="Thumbnail"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
                rules={[
                  {
                    required: false,
                    message: "Vui lòng tải lên thumbnail.",
                  },
                ]}
              >
                <Upload
                                    accept=".pnj,.jpg,.pdf"
                                    maxCount={1}
                                    beforeUpload={() => false}
                                    fileList={arrFile}
                                    onChange={(file) => {
                                     
                                      console.log(file);
                                      
                                        setArrFile(file.fileList);
                                    }}
                                >
                                    <Button className="form-profile__upload" size="large">
                                        Kéo sơ yếu lý lịch của bạn
                                        {/* <UploadIcon /> */}
                                    </Button>
                                </Upload>
              </Form.Item>
            </Col>
            <Col span={12}>
  
              <Form.Item
                name="img"
                label="Ảnh chi tiết"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
                rules={[
                  {
                    required: false,
                    message: "Vui lòng tải lên thumbnail.",
                  },
                ]}
              >
                <Upload
                                    accept=".pnj,.jpg,.pdf"
                                    maxCount={1}
                                    beforeUpload={() => false}
                                    fileList={arrFile}
                                    onChange={(file) => {
                                        setArrFile(file.fileList);
                                    }}
                                >
                                    <Button className="form-profile__upload" size="large">
                                        Kéo sơ yếu lý lịch của bạn
                                        {/* <UploadIcon /> */}
                                    </Button>
                                </Upload>
              </Form.Item>
            

            </Col>
          </Row>
        </Card>

        <Form.Item className="brand__form__buttonGroup">
          <ButtonFeat
            link={ROUTE_PATHS.Product}
            onCreateNew={handleCreateNew}
            handleName={isEdit ? "Lưu" : "Tạo mới"}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default ProductForm;
