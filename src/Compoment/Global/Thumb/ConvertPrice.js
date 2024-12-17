import React from 'react';

const ConvertPrice = (props) => {
    return (
       <p id="price-product">
        {Number(props.price).toLocaleString("vi-VN")} <span>Đ</span>
       </p>
    );
};

export default ConvertPrice;