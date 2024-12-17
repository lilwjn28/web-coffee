import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
  );
  const [voucher, setVoucher] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (product) => {
    // console.log(product);
    
    const newCart = [...cart];
    const checkIndex = newCart.findIndex((item) => item.id === product.id);
    if (checkIndex >= 0) {
      newCart[checkIndex].quantity++;
    } else {
      product.quantity = 1;
      newCart.push(product);
    }
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));
  };

  const handleQuantity = (type, index) => {
    const newCart = [...cart];
    if (type === "plus") {
      newCart[index].quantity++;
    } else if (type === "minus") {
      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      } else {
        newCart.splice(index, 1);
      }
    }
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));
  };

  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));
  };

  // Tính tổng tiền giỏ hàng
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Nếu có voucher, giảm giá tổng tiền
  const calculateTotalWithVoucher = () => {
    const totalPrice = calculateTotalPrice();
    if (voucher && voucher.discount) {
      return totalPrice - totalPrice * (voucher.discount / 100);
    }
    return totalPrice;
  };
  const linkProduct = "http://localhost:3301/products";
  const linkOrder = "https://6735625c5995834c8a929abe.mockapi.io/DataOrder/";

  return (
    <CartContext.Provider
      value={{
        cart,
        linkProduct,
        linkOrder,
        handleAddToCart,
        handleQuantity,
        handleDelete,
        isLoading,
        setIsLoading,
        calculateTotalPrice,
        calculateTotalWithVoucher,
        voucher, 
        setVoucher
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const UseCart = () => {
  return useContext(CartContext);
};

export { CartProvider, UseCart };
