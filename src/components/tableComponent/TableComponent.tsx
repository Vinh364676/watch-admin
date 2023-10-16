import React, { useState } from "react";
import { Button, Card, Input, Pagination, Row, Table } from "antd";
import {
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  FilterOutlined,
  CheckCircleOutlined 
} from "@ant-design/icons";
import "./TableComponent.scss";
import ButtonCustom from "../button-custom/ButtonCustom";
type Prop={
  columns:any;
  data:any;
  placeholder:string
}

const TableComponent = ({columns, data,placeholder}:Prop) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [searchText, setSearchText] = useState("");

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
    // setSearchText(""); // Đặt giá trị tìm kiếm thành rỗng khi chọn/deselect các hàng
  };
  const handleSearch = (e: any) => {
    const { value } = e.target;
    // setSearchText(value);
  };
    
//   const filteredData = data.filter((item: any) =>
//   item.name.toLowerCase().includes(searchText.toLowerCase())
// );

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="table">
      <Card className="table__card">
      <Row className="table__header">
        <div>
          <Input
            className="table__header__search"
            allowClear={true}
            placeholder={placeholder}
            prefix={<SearchOutlined />}
             bordered={false}
             onChange={handleSearch}
          />
        </div>
        <div className="table__header__right">
          <div className="table__header__right--button">
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
          <ButtonCustom icon={<DownloadOutlined />} title="Export"/>
          <ButtonCustom icon={<FilterOutlined />} title="Filter"/>
        </div>
      </Row>
      <Table
        className="table__table"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Pagination className="table__pagination" defaultCurrent={1} total={50} />
      </Card>
      
    </div>
  );
};

export default TableComponent;