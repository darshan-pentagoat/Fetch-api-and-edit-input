import React from "react";
import { products } from "./data";
import Cart from "./Cart";
import { useCart } from "./CartContext";
import Checkout from "./Checkout";

const Product = () => {
  const { cart, addCart } = useCart();

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {products.map((product, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹ {product.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addCart(product)}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? "Added" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cart />

      <Checkout />
    </>
  );
};

export default Product;
