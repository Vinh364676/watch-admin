import React, { useState } from "react";
import { Button, Input, Row, Table } from "antd";
import {
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  FilterOutlined,
  CheckCircleOutlined 
} from "@ant-design/icons";
import "./OrderTable.scss";
const columns = [
  {
    title: "Order ID",
    dataIndex: "orderID",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Payment Method",
    dataIndex: "payment",
  },
  {
    title: "Customer Name",
    dataIndex: "customer",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text: any, record: any) => (
      <span>
            {text === "Delivered" ? (
                <span className="customIcon">
                    <div className="circle"></div>
                    {text}
                </span>
            ) : null}
        </span>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
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
    product: `Edward King ${i}`,
    orderID: 32,
    address: `London, Park Lane no. ${i}`,
    date: "27/09/2023",
    payment: "PayPal",
    customer: "Bessie Cooper",
    status: "Delivered",
    amount: "$200.00",
  });
}
const OrderTable = () => {
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

export default OrderTable;
