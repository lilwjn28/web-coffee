import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const Profile = ({ userId }) => {
  const [profileData, setProfileData] = useState(null); // Dữ liệu profile
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Trạng thái lỗi

  // Hàm để lấy dữ liệu từ API
  useEffect(() => {
    if (!userId) return; // Kiểm tra nếu không có userId
    axios
      .get(`http://localhost:3301/contact/${userId}`) // API trả về thông tin user
      .then((response) => {
        setProfileData(response.data); // Cập nhật dữ liệu khi lấy thành công
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // Cập nhật lỗi nếu có
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>; // Hiển thị khi đang tải
  }

  if (error) {
    return <p>Error: {error}</p>; // Hiển thị khi có lỗi
  }

  if (!profileData) {
    return <p>Không tìm thấy thông tin người dùng.</p>; // Xử lý nếu không có dữ liệu
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <Card>
            <Card.Header>Thông tin cá nhân</Card.Header>
            <Card.Body>
              <Card.Title>{profileData.fullname}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {profileData.email}
              </Card.Text>
              <Card.Text>
                <strong>Số điện thoại:</strong> {profileData.phone}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
