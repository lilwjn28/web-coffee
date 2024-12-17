import React from 'react';
import "./Logout.css";
import { Button } from 'react-bootstrap';

const LogOut = () => {
    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        // Xóa thông tin đăng nhập từ localStorage
        localStorage.removeItem("email");

        // Điều hướng người dùng đến trang đăng nhập
        window.location.href = "/login";
    };

    // Hàm điều hướng về trang chủ
    const handleHomePage = () => {
        // Điều hướng người dùng đến trang chủ
        window.location.href = "/";
    };

    return (
        <header className="header">
            <div className="header-content">
                {/* Nút Trang Chủ */}
                <Button
                    variant="primary"
                    onClick={handleHomePage}
                    style={{ marginRight: "10px" }}
                >
                    Trang Chủ
                </Button>

                {/* Nút Logout */}
                <Button variant="danger" onClick={handleLogout}>
                   Đăng Xuất
                </Button>
            </div>
        </header>
    );
};

export default LogOut;
