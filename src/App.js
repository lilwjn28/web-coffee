import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Compoment/Global/Header/Header";
import Footer from "./Compoment/Global/Footer/Footer";

import MouseFollower from "./Asset/MouseFollower/MouseFollower";
import Body from "./Compoment/Global/Body/Body";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderNew from "./Compoment/Global/Header/HeaderNew";
import PageAdmin from "./Compoment/Page/Admin/AdminPage/PageAdmin";
import View from "./Compoment/Global/View/View";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [checkAdmin,setCheckAdmin] = useState(false);
  const { pathname } = useLocation();
  

  useEffect(() => {
    // Giả lập thời gian loading của trang
    window.scrollTo(0, 0); // Cuộn lên đầu trang
    if (pathname === "/admin-page") {
      setCheckAdmin(true);
      // console.log("zxc");
      
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [pathname]);
  return (
    <div className="body">
      {checkAdmin ? <PageAdmin></PageAdmin> : <View></View>}
      {
      /* <HeaderNew></HeaderNew>
      <Body />
      <Footer></Footer>
      <MouseFollower></MouseFollower> */}
    </div>
  );
}

export default App;
