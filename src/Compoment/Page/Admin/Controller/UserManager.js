import React from "react";
import Table from "react-bootstrap/Table";
import Title from "../../../Title/Title";
import { Container, Row } from "react-bootstrap";
import { UseCart } from "../../../../Context/Data/Cart";
import useAxios from "../../../../Context/API/UseAxios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FunctionProduct.css";
import usePageTitle from "../../../../Features/TitlePage";

const UserManager = (props) => {
    usePageTitle(`Quản Lý Thành Viên`)
    const navigate = useNavigate();

    const tablelistUser = [
        "ID",
        "Name",
        "Email",
        "Password",
        "Role",
    ];
    const dataUser = useAxios("http://localhost:3301/users");
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${props.link}/${id}`);
            alert("Đã xóa user thành công");
        }catch (error) {
            console.log("Đã xảy ra lỗi", error);
        }
    };
    return (
       <div className="admin-list-user">
        <Container>
            <Row>
                <Title title="Quản Lý Thành Viên" />
            </Row>
        </Container>
        <Table>
            <thead>
                <tr>
                    {tablelistUser && tablelistUser.map((item) => <th>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {dataUser && dataUser.map((item, index) => (
                    <tr>
                        {/* <td>{index +1}</td> */}
                        <td>{item.ID} </td>
                        <td> {item.Name} </td>
                        <td> {item.email} </td>
                        <td> {item.password }</td>
                        <td>{item.role} </td>
                    </tr>
                ))}
            </tbody>
        </Table>
       </div>
    );
};

export default UserManager;