import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hook/useCart";
import useProducts from "../Hook/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handlerRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  const clearCart = (cart) => {
    cart = [];
    setCart(cart);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handlerRemoveProduct={handlerRemoveProduct}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/shipment">
            <button className="button">
              <p>Procced Checkout</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
