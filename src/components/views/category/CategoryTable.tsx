import TableComponent from "../../tableComponent/TableComponent";
import {
  EllipsisOutlined,
  DeleteOutlined,
  DownloadOutlined,
  FilterOutlined,
  CheckCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import deleteIcon from "../../../assets/images/product/deleteIcon.svg";
import { Dropdown, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../../constants/url-config";
import { dispatch, useSelector } from "../../../redux/store";
import moment from "moment";
import { getProduct } from "../../../redux/slices/product";
import { deleteCategory, getCategory } from "../../../redux/slices/category";



const CategoryTable = () => {
  const {categoryList} = useSelector(state => state.category);
  const {productList} = useSelector(state => state.product);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoryID, setSelectedCategory] = useState<number | null>(null);

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
      getProduct({
        pageIndex: 1,
        pageSize: 100,
      })
    );
  }, []);


  const handleCancel = () =>{
    setIsModalOpen(false);
  }

  const showModal = (categoryID: number) => {
    setSelectedCategory(categoryID);
    setIsModalOpen(true);
    console.log(categoryID)
  };

  // thong bao
  const showNotification = () => {
    notification.success({
      className: "notification__item",
      message: "Xóa thành công",
      //   description: 'Sản phẩm đã được xóa thành công!',
      duration: 3,
    });
  };
  const showCategoryHasProductsError = () => {
    notification.error({
      className: "notification__item notification__item--error",
      message: "Danh mục đang tồn tại sản phẩm, không thể xóa được!",
      //   description: 'Sản phẩm đã được xóa thành công!',
      duration: 3,
    });
    setIsModalOpen(false);
  };

// xu ly
const handleOk = async () => {
  if (selectedCategoryID !== null) {
    try {
      const hasProducts = productList.some(product => product.brandId === selectedCategoryID);
      if (hasProducts) {
        // Hiển thị thông báo lỗi
        showCategoryHasProductsError();
      } else {
        // Nếu không có sản phẩm liên quan, thực hiện xóa brand như bình thường.
        await dispatch(deleteCategory(selectedCategoryID));
        setSelectedCategory(null);
        setIsModalOpen(false);
        showNotification();
      }
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  }
};
  
  const dataForTable = categoryList.map((category, index) => ({
    key: index,
    categoryID: category.id,
    name: category.name,
    dateCreate: moment(category.createdDT).format("DD-MM-YYYY")
  }));
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      width: 100,
      render: (text:any, record:any, index:any) => index + 1,
    },
    {
      title: "ID",
      dataIndex: "categoryID",
      width: 150,
    },
    {
      title: "Tên danh mục",
      dataIndex: "name",
      width: 300,
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
                  onClick: () => showModal(record.categoryID),
                },
                {
                  label: (
                    <Link to={ROUTE_PATHS.EditCategory.replace(":id", record.categoryID.toString())}>
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
        placeholder="Tìm kiếm danh mục"
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
          <h2 className="modal__product__content--title">Xóa danh mục</h2>
          <p className="modal__product__content--desc">
            Bạn có chắc chắn muốn xóa danh mục này không?
          </p>
        </div>
      </Modal>
    </>
  );
};

export default CategoryTable;
