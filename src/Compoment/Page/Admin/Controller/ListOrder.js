import React from 'react';
import { Container, Row, Tab, Table, Tabs } from 'react-bootstrap';
import Title from '../../../Title/Title';
import ListProduct from "./ListProduct";
import TableList from '../../../Global/Thumb/TableList';
import AddProduct from './AddProduct';
const ListOrder = () => {
    return (
        <div className="admin-list-order">
            <Container>
                <Row>
                    <Title title="List Order" />
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="list-product"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="list-order" title="Danh sách đơn hàng">

                        </Tab>
                        <Tab eventKey="wait-payment" title="Chờ thanh toán">
                            <TableList></TableList>
                        </Tab>
                        <Tab eventKey="wait-approval" title="Chờ duyệt">
                            {/* <ListOrder></ListOrder> */}
                        </Tab>
                        <Tab enventKey="complete" title="Đã hủy">
                            {/* <ListOrder></ListOrder> */}
                        </Tab>
                        <Tab eventKey="refund" title="Hoàn tiền">
                            {/* <ListOrder></ListOrder> */}
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};

export default ListOrder;