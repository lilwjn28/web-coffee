import React, { useEffect, useState } from "react";
import "./PageAdmin.css";
import HeadingPage from "../../../Title/HeadingPage";
import useAxios from "../../../../Context/API/UseAxios";
import { Container, Row, Col, Nav } from "react-bootstrap";

// import TableList from "../../../Global/Thumb/TableList";

import ListAdmin from "../Nav/ListAdmin";
import ListCus from "../Nav/ListCus";
import LogOut from "../Login/LogOut";


const PageAdmin = () => {
  const [emailUser] = useState(localStorage.getItem("email"));
  const [checkAdmin,setcheckAdmin] = useState("");
  



  const dataAdmin = useAxios(
    "http://localhost:3301/users"
  );
  const check = dataAdmin.find((item) => item.email === emailUser);
  useEffect(() => {
    if (check && check.role === "admin") {
      setcheckAdmin("list-product" );
      
    } else {
      setcheckAdmin("profile");
    }
   
  }, [check]);

  return (
    <div className="page-admin">
      <HeadingPage title={`Xin chào, ${check && check.role}`} />
      <div className="admin-layout">
        {/* Sidebar */}
        {/* <div className="sidebar">
          <Nav className="flex-column">
            <Nav.Link href="/list-product">Quản lý đơn hàng</Nav.Link>
            <Nav.Link href="/add-product">Thêm sản phẩm</Nav.Link>
            <Nav.Link href="/manage-members">Quản lý thành viên</Nav.Link>
            <Nav.Link href="/order">Quản lý đơn hàng</Nav.Link>
          </Nav>
        </div> */}

        {/* Main Content */}
        <div className="content">
          {check && check.role === "admin" ? <ListAdmin /> : <ListCus />}
          <LogOut />
        </div>
      </div>
    </div>
  );
};

export default PageAdmin;
