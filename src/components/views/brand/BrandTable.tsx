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
const { Item, Divider } = Menu;

const BrandTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { brandList } = useSelector((state) => state.brand);
  const [selectedBrandId, setSelectedBrandId] = useState<number | null>(null);
  console.log(selectedBrandId);
  useEffect(() => {
    dispatch(
      getBrand({
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
  const showModal = (brandID: number) => {
    setSelectedBrandId(brandID);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (selectedBrandId !== null) {
      try {
        await dispatch(deleteBrand(selectedBrandId));
      
        setSelectedBrandId(null);
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
  const dataForTable = brandList.map((brand, index) => ({
    key: index,
    brandID: brand.id,
    name: brand.name,
  }));
  const columns = [
    {
      title: "Mã thương hiệu",
      dataIndex: "brandID",
      width: 150,
    },
    {
      title: "Tên thương hiệu",
      dataIndex: "name",
      width: 300,
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
      width: 150,
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
                  onClick: () => showModal(record.brandID),
                },
                {
                  label: (
                    <Link to={ROUTE_PATHS.EditBrand.replace(":id", record.brandID.toString())}>
                      Sửa
                    </Link>
                  ),
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

  return (
    <>
      <TableComponent
        columns={columns}
        data={dataForTable}
        placeholder="Tìm kiếm thương hiệu"
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
          <h2 className="modal__product__content--title">Xóa thương hiệu</h2>
          <p className="modal__product__content--desc">
            Bạn có chắc chắn muốn xóa thương hiệu này không?
          </p>
        </div>
      </Modal>
    </>
  );
};

export default BrandTable;
