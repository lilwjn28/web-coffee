import React from "react";
import "./DetailCoffee.css";
import { Col, Container, Row } from "react-bootstrap";
const DetailCoffee = () => {
  return (
    <div className="detail-coffee">
      <Container fluid>
        <div className="banner-detail-coffee banner-1">
          <Row>
            <h5>OUR MISSION</h5>
            <Col lg={8}>
              <div className="title-banner">
                <h4>EXCEPTIONAL QUALITY</h4>
                <h3>
                  It all began with a modest concept: Create{" "}
                  <span>amazing</span> coffee
                </h3>
                <p>
                  Our mission is to provide sustainably sourced, hand-picked
                  quality coffee. Great coffee is our passion and we want to
                  share it with you.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="heading-page">
        <div className="text-center">
          <h2>FEATURED PRODUCTS</h2>
          <h3>Our Coffee</h3>
        </div>
      </div>
      <div className="container banner-2">
        <div className="title-banner">
          <h3>Trio Blend Box</h3>
          <p>
            This box contains all three of our delicious, ethically sourced
            coffee blends.
          </p>
          <button>OPEN THE BOX</button>
        </div>
      </div>
      <div className="products-item">
        <Container>
          <Row>
            <Col lg={4}>
              <img
                src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-01-600x839.jpg"
                alt=""
              />
              <p>Colombia Dark Roast </p>
              <p>
                <span>$19.00-$27.00</span>
              </p>
            </Col>
            <Col lg={4}>
              <img
                src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-02-600x839.jpg"
                alt=""
              />
              <p>Swiss Water Decaf </p>
              <p>
                {" "}
                <span>$19.00-$27.00</span>
              </p>
            </Col>
            <Col lg={4}>
              <img
                src="https://www.amayatheme.redsun.design/roastery/wp-content/uploads/sites/2/2020/08/coffee-bag-03-600x839.jpg"
                alt=""
              />
              <p>French Roast </p>
              <p>
                {" "}
                <span>$19.00-$27.00</span>
              </p>
            </Col>
          </Row>
          <div className="align-item">
            <button>SHOP ALL COFFEE</button>
          </div>
          <Row>
            <Col clas></Col>
          </Row>
        </Container>
      </div>
    <div className="p-coffee">
       <Container fluid>
           <div className="container banner-3">
            <Row>
                <h5>TIME TO CHILL</h5>
                <Col lg={7}>
                    <div className="title-p">
                    <h4>MORE THAN JUST COLD COFFEE</h4>
                    <h3>Natural Cold Brew  Coffee</h3>
                    <p>Refresh your mind with organic, sustainably-sourced cold brew coffee, delivered straight to your door.</p>               
                    <button>LEARN MORE</button>
                </div>
                </Col>
            </Row>
           </div>
       </Container>
      </div>
    </div>
  );
};

export default DetailCoffee;
