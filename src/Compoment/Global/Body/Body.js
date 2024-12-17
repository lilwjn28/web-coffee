import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../Page/HomePage/HomePage";
import CategoryProduct from "../../Page/Detail/CategoryProduct";
import Search from "../../Page/Detail/Search";
import Product from "../../Page/Detail/Product";
import Cart from "../../Page/CardProduct/Card";
import Order from "../../Page/Order/Order";
import "./Body.css";
import Category from "../../Page/Marketing/CategoryMar/Category";
import ProductMarketing from "../../Page/Product/ProductMarketing";
// import Footer from "../Footer/Footer";
import AuthPage from "../../Page/Admin/Login/AuthPage";
import PageAdmin from "../../Page/Admin/AdminPage/PageAdmin";
import AddProduct from "../../Page/Admin/Controller/AddProduct";
import Contact from "../../Page/HomePage/Contact";
import LogOut from "../../Page/Admin/Login/LogOut";
import ListProduct from "../../Page/Admin/Controller/ListProduct";
import AboutUs from "../../Page/AboutUs/AboutUs";
import UpdateProduct from "../../Page/Admin/Controller/UpdateProduct";
const Body = () => {
  
  return (
    <div className="body-page">

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/product-category" element={<CategoryProduct />}></Route>
        <Route path="/search/:searchQuery" element={<Search />}></Route>
        <Route path="/product/:searchQuery" element={<Product />}></Route>
        <Route path="/update-product/:slug" element={<UpdateProduct/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<AuthPage />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
        <Route path="/thiet-ke-website" element={<Category />}></Route>
        <Route path="/product-marketing/:slug" element={<ProductMarketing />}></Route>
        <Route path="/admin-page" element={<PageAdmin />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/list-product" element={<ListProduct />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
       
        </Routes>
        {/* <Footer></Footer> */}
    </div>
  );
};

export default Body;
