import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hook/useCart";
import useProducts from "../Hook/useProducts";
import Product from "../Producut/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

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
  const clearCart = (cart) => {
    cart = [];
    setCart(cart);
    deleteShoppingCart();
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
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/orders">
            <button className="button">
              <p>Review Order</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
