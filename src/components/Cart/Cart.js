import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";
const Cart = ({ cart, children, clearCart }) => {
  //   const total = cart.reduce(
  //     (prevState, curState) => prevState + curState.price,
  //     0
  //     );
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>order summary</h4>
      <p>selected items {quantity}</p>
      <p>Total price :${total}</p>
      <p>Total Shipping :${shipping}</p>
      <p>Tax:$ {tax}</p>
      <h5>Grand Total :$ {grandTotal.toFixed(2)}</h5>
      <div>
        <button onClick={() => clearCart(cart)} className="button">
          <p>Clear Cart</p>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
