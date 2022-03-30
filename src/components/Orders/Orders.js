import React from "react";
import useCart from "../Hook/useCart";
import useProducts from "../Hook/useProducts";
import "./Orders.css";
const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div>
      <h1>This is orders component</h1>
      <h1>Orders items {products.length}</h1>
      <h1>{cart.length}</h1>
    </div>
  );
};

export default Orders;
