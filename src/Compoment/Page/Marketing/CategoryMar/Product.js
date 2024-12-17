import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ThumbProductMarketing from "./ThumbProductMarketing";
import useAxios from "../../../../Context/API/UseAxios";
import FadeInSection from "../../../../Features/FadeInSection";

const Product = () => {
  const data = useAxios(
    "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing"
  );
  const cate = useAxios(
    "https://671eebe51dfc429919836d48.mockapi.io/myweb/categoryMarketing"
  );
  const [filterData, setFilterData] = useState([data]);
  const handleChangData = (e) => {
    setFilterData(data.filter((item) => item.category === e));
  };

  return (
    <>
      <Container className="Product-Marketing">
        <FadeInSection>
          <div className="heading-page">
            <div className="text-center">
              <h2>List Product</h2>
              <h3>Đa dạng mẫu thiết kế</h3>
            </div>
          </div>
        </FadeInSection>
        <p>
          Bạn có thể chọn mẫu phù hợp để phát triển thêm hoặc yêu cầu thiết kế
          mới hoàn toàn. Chúng tôi luôn sẵn sàng thư viện mẫu thiết kế giúp bạn
          dễ dàng hình dung và tối ưu tiến độ xây dựng website.
        </p>
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="mb-3"
          onSelect={(e) => handleChangData(e)}
        >
          <Tab eventKey="all" title="All">
            <Row>
              {data &&
                data.map((item) => (
                  <Col xl={3} lg={4} md={6} xs={6} sm={4}>
                    <ThumbProductMarketing
                      id={item.id}
                      key={item.id}
                      title={item.title}
                      images={item.imagethumb}
                      des={item.description}
                      price={item.price}
                      rate={item.rating}
                    />
                  </Col>
                ))}
            </Row>
          </Tab>
          {cate.map((item) => (
            <Tab eventKey={item.category} title={item.title}>
              <Row>
                {filterData &&
                  filterData.map((item) => (
                    <Col xl={3} lg={4} md={6} xs={6} sm={4}>
                      <ThumbProductMarketing
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        images={item.imagethumb}
                        des={item.description}
                        price={item.price}
                        rate={item.rating}
                      />
                    </Col>
                  ))}
              </Row>
            </Tab>
          ))}
        </Tabs>
      </Container>
    </>
  );
};

export default Product;
