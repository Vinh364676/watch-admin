import TableComponent from "../../tableComponent/TableComponent";
import {
  EllipsisOutlined,
  DeleteOutlined,
  DownloadOutlined,
  FilterOutlined,
  CheckCircleOutlined,
  EditOutlined
} from "@ant-design/icons";
import productImg from "../../../assets/images/product/product.svg";
import productImg1 from "../../../assets/images/product/product1.jpg";
import deleteIcon from "../../../assets/images/product/deleteIcon.svg";
import "./Product.scss";
import { Dropdown, Menu, Modal, notification } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/url-config";
const { Item, Divider } = Menu;



const ProductTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showNotification = () => {
        notification.success({
            className:"notification__item",
          message: 'Xóa thành công',
        //   description: 'Sản phẩm đã được xóa thành công!',
        duration: 3
        });
      };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    showNotification();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "productID",
      width: 100,
    },
    {
      title: "Sản phẩm",
      width: 360,
      dataIndex: "product",
      className: "img__cell",
      render: (text: any, record: any) => (
        <span className="img__cell">
          <img
            src={record.imageSrc}
            alt={text}
            style={{
              width: "60px",
              height: "60px",
              marginRight: "8px",
              background: "rgb(241, 245, 249)",
            }}
            className="cardHistory__content--img"
          />
          {text}
        </span>
      ),
    },
  
    {
      title: "Thương hiệu",
      dataIndex: "category",
      width: 150,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      width: 100,
    },
    {
      title: "Giá bán",
      dataIndex: "price",
      width: 100,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (text: any, record: any) => (
        <span>
          {text === "Published" ? (
            <span className="status__publish">{text}</span>
          ) : null}
          {text === "Low Stock" ? (
            <span className="status__low">{text}</span>
          ) : null}
        </span>
      ),
      width: 100,
    },
    {
      title: "Ngày tạo",
      dataIndex: "date",
      width: 100,
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      render: (text: any, record: any) => (
        <span className="table__action">
          {/* <a onClick={() => handleDelete(record.key)}> */}
<Dropdown
            placement="bottomRight"
            menu={{
              items: [
                {
                  label: "Xóa",
                  key: "0",
                  icon: <DeleteOutlined />,
                  className: "drop--delete",
                  onClick: () => showModal(),
                },
                {
                  // label: (
                  //   <Link to={ROUTE_PATHS.EditBrand.replace(":id", record.brandID.toString())}>
                  //     Sửa
                  //   </Link>
                  // ),
                  key: "1",
                  icon: <EditOutlined />,
                },
              ],
            }}
            className="table__action__dropdown"
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <EllipsisOutlined />
            </a>
          </Dropdown>
        </span>
      ),
      width: 100,
    },
  ];
  const data = [
    {
      key: 1,
      product: "MICHAEL KORS MINI ",
      productID: "1",
      category: "casio",
      date: "27/09/2023",
      price: "1.234.567",
      quantity: "1000",
      customer: "Bessie Cooper",
      status: "Low Stock",
      imageSrc: productImg,
    },
    {
      key: 2,
      product: "OMEGA DE VILLE PRESTIGE WATCH 39.5MM",
      productID: "2",
      category: "omega",
      date: "27/09/2023",
      price: "11,900,000",
      quantity: "234",
      status: "Published",
      imageSrc: productImg1,
    },
    {
      key: 3,
      product: "LONGINES MASTER WATCH 38.5MM",
      productID: "2",
      category: "rolex",
      date: "27/09/2023",
      price: "11,900,000",
      quantity: "234",
      status: "Dark",
      imageSrc: productImg1,
    },
  ];

  return (
    <>
      <TableComponent
        columns={columns}
        data={data}
        placeholder="Tìm kiếm sản phẩm"
      />
       <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  className="modal__product" okType={"danger"}>
        <img src={deleteIcon} alt=""  className="modal__product__icon"/>
         <div className="modal__product__content">
        <h2 className="modal__product__content--title">Xóa sản phẩm</h2>
        <p className="modal__product__content--desc">Bạn có chắc chắn muốn xóa sản phẩm này không?</p>
        </div>
      </Modal>
    </>
  );
};

export default ProductTable;
