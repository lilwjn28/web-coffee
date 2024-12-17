import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [product, setProduct] = useState([]);
    const getMovie = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setProduct(data);
        } catch (err) {
            alert(err);
        }
    };
    useEffect(() => {
        getMovie();
    }, [url]);
    return product;
};

export default useFetch;