import React from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import ListProduct from "../Controller/ListProduct";
import UserManager from "../Controller/UserManager";
import UpdateProduct from "../Controller/UpdateProduct";
import ListOrder from "../Controller/ListOrder";
import AddProduct from "../Controller/AddProduct"
const ListAdmin = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={3}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Danh sách sản phẩm</Nav.Link>
            
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Thêm sản phẩm</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Danh Sách Thành Viên</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourd">Quản lý đơn hàng</Nav.Link>
          </Nav.Item>

        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first"><ListProduct
          link={
            "http://localhost:3301/products"
          }
        ></ListProduct></Tab.Pane>
          <Tab.Pane eventKey="second"> <AddProduct></AddProduct></Tab.Pane>
          <Tab.Pane eventKey="third"> <UserManager></UserManager></Tab.Pane>
          <Tab.Pane eventKey="fourd">   <ListOrder></ListOrder></Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  );
};

export default ListAdmin;
