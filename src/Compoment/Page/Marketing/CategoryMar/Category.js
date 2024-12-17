import React from 'react';
import About from './About';
import Banner from './Banner';
import Product from './Product';

import "./Category.css";
import usePageTitle from '../../../../Features/TitlePage';
import Partner from './Partner';
const Category = () => {
    usePageTitle("Thiết kế website - Ông Xuân");
    return (
        <div className='category-marketing'>
            <Banner></Banner>
            <Partner></Partner>
            <About></About>
            <Product></Product>
           
        </div>
    );
};

export default Category;