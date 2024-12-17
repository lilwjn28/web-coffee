import React, { useEffect, useState } from 'react';
import CategoryProduct from './CategoryProduct';

const Search = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const removeAccents = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
      };
    useEffect(() => {
      const path = window.location.pathname;
      const query = removeAccents(path.split("/search/")[1]); // lấy phần sau '/search/'
      setSearchQuery(query);
      console.log(query);
      
    }, []);
    return (
      <>
        <CategoryProduct search={searchQuery}></CategoryProduct>
      </>
    );
  };

export default Search;