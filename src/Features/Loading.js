// Loading.js
import React from "react";
import { UseCart } from "../Context/Data/Cart";

function Loading() {
  const { isLoading } = UseCart();

  if (!isLoading) return null;

  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;
