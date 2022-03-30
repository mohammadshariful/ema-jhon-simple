import React, { useEffect, useState } from "react";
import { addToDb, getStoreCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Producut/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoreCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);
  const handlerAddToCart = (selectedProduct) => {
    let newCart = [];
    const exit = cart.find((product) => product.id === selectedProduct.id);
    console.log(exit);
    if (!exit) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exit.quantity = exit.quantity + 1;
      newCart = [...rest, exit];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handlerAddToCart={handlerAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
