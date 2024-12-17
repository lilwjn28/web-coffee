import React from 'react';
import DataFeedback from "../../../Context/Data/DataFeedback";
const SeoProduct = (props) => {
    return (
        <div className="product-seo-container">
        <div className="product-description">
          <h2>Mô tả sản phẩm</h2>
          <p>{props.description}</p>
        </div>
        
        <div className="related-products">
          <h2>Sản phẩm liên quan</h2>
          <div className="related-products-list">
              <div key={props.id} className="related-product-item">
                <img src={props.image} alt={props.title} />
                <h4>{props.title}</h4>
              </div>
          </div>
        </div>
        
        <div className="product-reviews">
          <h2>Đánh giá sản phẩm</h2>

          {DataFeedback .length > 0 ? (
            DataFeedback.map((review, index) => (
              <div key={index} className="review-item">
                <p><strong>{review.user}:</strong> {review.comment}</p>
                <p>Rating: {review.rating}/5</p>
              </div>
            ))
          ) : (
            <p>Chưa có đánh giá nào cho sản phẩm này.</p>
          )}
        </div>
      </div>
    );
};

export default SeoProduct;