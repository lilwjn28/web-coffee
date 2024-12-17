import React from "react";
import "./HomePage.css";
import InfoProduct from "./InfoProduct";
import AboutUs from "./AboutUs";
import usePageTitle from "../../../Features/TitlePage";
import Banner from "./Banner";
import Contact from "./Contact";
import Partner from "../Marketing/CategoryMar/Partner";
import About from "../Marketing/CategoryMar/About";
import Feedback from "./Feedback";
import Popular from "./Popular";
const HomePage = () => {
  usePageTitle("Home Page - Ông Xuân");

  return (
    <div className="homepage">
      <Banner></Banner>
      <Partner></Partner>
      <About></About>
      <AboutUs></AboutUs>
      <InfoProduct></InfoProduct>
      <Contact></Contact>
      <Feedback></Feedback>
      <Popular></Popular>
    </div>
  );
};

export default HomePage;
