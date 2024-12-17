import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ListOrder from "../Controller/ListOrder";
import Profile from "../Controller/Profile";

const ListCus = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="profile" title="Thông tin khách hàng">
        <Profile></Profile>
      </Tab>

      <Tab eventKey="list-order" title="Danh Sách Đơn Hàng">
        <ListOrder></ListOrder>
      </Tab>
    </Tabs>
  );
};

export default ListCus;
