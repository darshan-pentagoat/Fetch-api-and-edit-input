import React, { useReducer } from "react";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cart } = useCart();

  const totalPrice = () => {
    return cart.reduce((acc, pro) => acc + pro.quantity * pro.price, 0);
  };
  return (
    <div>
      <h1>Checkout</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod, idx) => (
            <tr>
              <td>{prod.name}</td>
              <td>{prod.quantity}</td>
              <td>{prod.price}</td>
              <td>{prod.quantity * prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-end px-5">Total: {totalPrice()}</p>
    </div>
  );
};

export default Checkout;
