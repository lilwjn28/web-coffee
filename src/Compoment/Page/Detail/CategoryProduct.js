import React, { useEffect, useState } from "react";
import "./CategoryProduct.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardProduct from "../../Global/CardProduct/CardProduct.js";
import useFetch from "../../../Context/API/ApiProduct.js";
const CategoryProduct = (props) => {
  const ApiProduct = useFetch("http://localhost:3301/products");
  const [fileterProduct, setFilterProduct] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  const filterProduct = props.search
    ? ApiProduct.filter((item) =>
        item.title.toLowerCase().includes(props.search.toLowerCase())
      )
    : null;
  const handlefilterText = (e) => {
    //GPT viet toi uu code
    const sortBy = e.target.getAttribute("value");
    setSelectedValue(e.target.value);
    const filtertext = filterProduct ? [...filterProduct] : [...fileterProduct];

    const sortOptions = {
      min: (a, b) => b.price - a.price,
      max: (a, b) => a.price - b.price,
      rating: (a, b) => b.rating.rate - a.rating.rate,
      count: (a, b) => b.rating.count - a.rating.count,
    };

    // Kiểm tra nếu sortBy có trong sortOptions, thực hiện sắp xếp
    if (sortOptions[sortBy]) {
      setFilterProduct(filtertext.sort(sortOptions[sortBy]));
    } else if (e.target.value === "all") {
      filterProduct
        ? setFilterProduct(filterProduct)
        : setFilterProduct(ApiProduct);
    }
  };
  const handlePrice = (e) => {
    const checkboxName = e.target.name;

    // Cập nhật trạng thái chỉ cho phép chọn một checkbox
    setSelectedCheckbox(checkboxName);

    // Log giá trị valueFull khi checkbox được chọn
    const valueFull = e.target.getAttribute("value");
    console.log(`Checkbox ${checkboxName} selected with valueFull:`, valueFull);
    if (valueFull === "0-99") {
      setFilterProduct(
        filterProduct
          ? filterProduct.filter((item) => item.price <= 99)
          : ApiProduct.filter((item) => item.price <= 99)
      );
    } else if (valueFull === "100-299") {
      setFilterProduct(
        filterProduct
          ? filterProduct.filter(
              (item) => item.price >= 100 && item.price <= 299
            )
          : ApiProduct.filter((item) => item.price >= 100 && item.price <= 299)
      );
    } else if (valueFull === "300-499") {
      setFilterProduct(
        filterProduct
          ? filterProduct.filter(
              (item) => item.price >= 300 && item.price <= 499
            )
          : ApiProduct.filter((item) => item.price >= 300 && item.price <= 499)
      );
    } else if (valueFull === "500") {
      setFilterProduct(
        filterProduct
          ? filterProduct.filter((item) => item.price >= 500)
          : ApiProduct.filter((item) => item.price >= 500)
      );
    }
    //Reset fiter text
    setSelectedValue("");
  };
  useEffect(() => {
    if (props.search) {
      setFilterProduct(filterProduct);
    } else {
      setFilterProduct(ApiProduct);
    }
  }, [ApiProduct]);

  return (
    <>
      <div className="cate-product">
        <Container>
          <Row className="heading-center">
            <h2>
              {props.search ? `Tìm kiếm: ${props.search}` : "TRANG SẢN PHẨM"}
            </h2>
          </Row>
          <Row className="filter-product">
            <Col lg={6}>
              <h3>Lọc theo giá</h3>
              <form action="#" className="filter-by-price">
                {/* Checkbox "Dưới 99.000 đ" */}
                <input
                  type="checkbox"
                  value={"0-99"}
                  onClick={handlePrice}
                  name="0-99"
                  id="0-99"
                  checked={selectedCheckbox === "0-99"} // Chỉ chọn nếu nó đang được chọn
                />
                <label htmlFor="0-99">Dưới 99.000 đ</label>
                {/* Checkbox "Từ 100.000 đ đến 299.000 đ" */}
                <input
                  type="checkbox"
                  value={"100-299"}
                  onClick={handlePrice}
                  name="100-299"
                  id="100-299"
                  checked={selectedCheckbox === "100-299"} // Chỉ chọn nếu nó đang được chọn
                />
                <label htmlFor="100-299">100.000 đ - 299.000 đ</label>
                {/* Checkbox "Từ 300.000 đ đến 499.000 đ" */}
                <input
                  type="checkbox"
                  value={"300-499"}
                  onClick={handlePrice}
                  name="300-499"
                  id="300-499"
                  checked={selectedCheckbox === "300-499"} // Chỉ chọn nếu nó đang được chọn
                />
                <label htmlFor="300-499">300.000 đ - 499.000 đ</label>
                {/* Checkbox "Từ 500.000 đ đến max" */}
                <input
                  type="checkbox"
                  value={"500"}
                  onClick={handlePrice}
                  name="500"
                  id="500"
                  checked={selectedCheckbox === "500"} // Chỉ chọn nếu nó đang được chọn
                />
                <label htmlFor="500">Trên 500.000 đ</label>
              </form>
            </Col>
            <Col lg={6}>
              <h3>Sắp xếp</h3>
              <form action="#" className="filter-by-price">
                <input
                  type="checkbox"
                  value="max"
                  onClick={handlefilterText}
                  name="max"
                  id="max"
                  checked={selectedValue === "max"} // Chỉ chọn nếu nó đang được chọn
                />
                <label htmlFor="max">Giá từ thấp đến cao</label>
                <input
                  type="checkbox"
                  value="min"
                  onClick={handlefilterText}
                  name="min"
                  id="min"
                  checked={selectedValue === "min"} // Chỉ chọn nếu nó đang được chọn
                />
                <label htmlFor="min">Giá từ cao đến thấp</label>
                <input
                  type="checkbox"
                  value="rating"
                  onClick={handlefilterText}
                  name="rating"
                  id="rating"
                  checked={selectedValue === "rating"} // Chỉ chọn nếu nó đang được chọn
                />
                <label htmlFor="rating">Đánh giá</label>
                <input
                  type="checkbox"
                  value="count"
                  onClick={handlefilterText}
                  name="count"
                  id="count"
                  checked={selectedValue === "count"} // Chỉ chọn nếu nó đang được chọn
                />
                <label htmlFor="count">Lượt Mua Hàng</label>
              </form>
            </Col>
          </Row>
          <Row className="product-card">
            {fileterProduct &&
              fileterProduct.map((item) => (
                <Col lg={3}>
                  <CardProduct
                    key={item.ID}
                    id={item.ID}
                    images={item.images}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                  ></CardProduct>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CategoryProduct;
