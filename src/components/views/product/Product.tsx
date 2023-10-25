import TableComponent from "../../tableComponent/TableComponent";
import {
  EllipsisOutlined,
  DeleteOutlined,
  DownloadOutlined,
  FilterOutlined,
  CheckCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import productImg from "../../../assets/images/product/product.svg";
import productImg1 from "../../../assets/images/product/product1.jpg";
import deleteIcon from "../../../assets/images/product/deleteIcon.svg";
import { Dropdown, Menu, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/url-config";
import { dispatch, useSelector } from "../../../redux/store";
import { deleteBrand, getBrand } from "../../../redux/slices/brand";
import "./Product.scss";
import moment from "moment";
import { deleteProduct, getProduct } from "../../../redux/slices/product";
import { getCategory } from "../../../redux/slices/category";
const { Item, Divider } = Menu;
const ProductTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector(state => state.category);
  const { brandList } = useSelector(state => state.brand);
  // console.log(productList)
   const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  console.log(selectedProductId);
  useEffect(() => {
    dispatch(
      getCategory({
        pageIndex: 1,
        pageSize: 100,
      })
    );
  }, []);
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
      getProduct({
        pageIndex: 1,
        pageSize: 100,
      })
    );
  }, []);
  const showNotification = () => {
    notification.success({
      className: "notification__item",
      message: "Xóa thành công",
      //   description: 'Sản phẩm đã được xóa thành công!',
      duration: 3,
    });
  };
  const showModal = (id: number) => {
    setSelectedProductId(id);
    setIsModalOpen(true);
    console.log()
  };

  const handleOk = async () => {
    if (selectedProductId !== null) {
      try {
        await dispatch(deleteProduct(selectedProductId));
      
        setSelectedProductId(null);
        setIsModalOpen(false);
        showNotification()
      } catch (error) {
        console.error("Error deleting brand:", error);
      }
    }
  };
  

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dataForTable = productList.map((product, index) => {
    const category = categoryList.find(category => category.id === product.categoryId);
    const categoryName = category ? category.name : "Unknown Category";
    const brand = brandList.find(brand => brand.id === product.brandId);
    const brandName = brand ? brand.name : "Unknown Category";
    const formattedPrice = (+product.price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    const formattedDateCreate = moment(product.createdDT).format("DD-MM-YYYY");

    return {
      key: index,
      id: product.id,
      name: product.productName,
      thumnail: product.thumnail,
      category: categoryName,
      brand:brandName,
      quantity:product.quantity,
      price:formattedPrice,
      status:product.status,
      dateCreate:formattedDateCreate
    };
  });
  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "id",
      width: 150,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      width: 600,
      render: (text:any, record:any) => (
        <div>
          <img className="product__table__img" src={record.thumnail} style={{ width: '50px' }} />
          {text}
        </div>
        ),
      },
      {
        title: "Thương hiệu",
        dataIndex: "brand",
        width: 150,
      },
      {
        title: "Danh mục",
        dataIndex: "category",
        width: 150,
      },
      {
        title: "Số lượng",
        dataIndex: "quantity",
        width: 150,
      },
      {
        title: "Giá",
        dataIndex: "price",
        width: 150,
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        width: 150,
      },
    {
      title: "Ngày tạo",
       dataIndex: "dateCreate",
      width: 300,
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      render: (text: any, record: any) => (
        <span className="table__action">
          <Dropdown
            placement="bottomRight"
            menu={{
              items: [
                {
                  label: "Xóa",
                  key: "0",
                  icon: <DeleteOutlined />,
                  className: "drop--delete",
                  onClick: () => showModal(record.id),
                },
                // {
                //   label: (
                //     <Link to={ROUTE_PATHS.EditBrand.replace(":id", record.brandID.toString())}>
                //       Sửa
                //     </Link>
                //   ),
                //   key: "1",
                //   icon: <EditOutlined />,
                // },
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

  return (
    <>
      <TableComponent
        columns={columns}
        data={dataForTable}
        placeholder="Tìm kiếm sản phẩm"
      />
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal__product"
        okType={"danger"}
      >
        <img src={deleteIcon} alt="" className="modal__product__icon" />
        <div className="modal__product__content">
          <h2 className="modal__product__content--title">Xóa sản phẩm</h2>
          <p className="modal__product__content--desc">
            Bạn có chắc chắn muốn xóa sản phẩm này không?
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ProductTable;
