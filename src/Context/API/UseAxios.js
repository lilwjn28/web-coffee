import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
      console.log("Data fetched success");
    } catch (error) {
      console.log("Errors Fetching Data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return data;
};

export default useAxios;
