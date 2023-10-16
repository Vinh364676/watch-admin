import React, { useState } from "react";
import { Button, Input, Pagination, Row, Switch, Table } from "antd";
import productImg from "../../../../assets/images/product/product.svg";
import {
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  FilterOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";

const handleStatusChange = (recordKey: any, checked: any) => {
  // Update the status in your data based on recordKey and checked value
  // Implement your logic here
};

const columns = [
  {
    title: "Product ID",
    dataIndex: "productId",
  },
  {
    title: "Product Name",
    dataIndex: "product",
    render: (text: any, record: any) => (
      <span>
        <img src={productImg} alt={text} style={{ marginRight: '8px',background:"rgb(241, 245, 249)" }} className="cardHistory__content--img" />
        {text}
      </span>
    ),
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text: any, record: any) => (
      <Switch defaultChecked />
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text: any, record: any) => (
      <span>
        {/* <a onClick={() => handleDelete(record.key)}> */}
        <DeleteOutlined />
        {/* </a> */}
      </span>
    ),
  },
];

const data: any[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    product: `Watch Nike Series ${i}`,
    productId: `${i}`,
    quantity: 10,
    price: "$200.00",
    brand: `Apple ${i}`,
  });
}

const UserTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="order">
      <Row className="order__header">
        <div>
          <Input
            className="order__header__search"
            allowClear={true}
            placeholder="Search Customer Name"
            prefix={<SearchOutlined />}
            bordered={false}
          />
        </div>
        <div className="order__header__right">
          <div className="order__header__right--button">
            {hasSelected ? (
              <Button
                danger={true}
                onClick={start}
                loading={loading}
                className="button__item"
              >
                <DeleteOutlined /> Delete
              </Button>
            ) : null}
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `${selectedRowKeys.length} Selected` : ""}
            </span>
          </div>
          <Button>
            <DownloadOutlined /> Export
          </Button>
          <Button>
            <FilterOutlined /> Filter
          </Button>
        </div>
      </Row>
      <Table
        className="order__table"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default UserTable;
