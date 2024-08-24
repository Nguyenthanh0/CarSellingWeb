import React, { useContext } from "react";
import "./ShoppingCart.css";
import Navbar from "../../Components/NavBar";
import Footer from "../Footer";
import { CartContext } from "./CartContext ";

function ShoppingCart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <div className="Mews-Narbar">
        <Navbar />
      </div>
      <div>
        <div className="title-news-thanh">
          <h1 className="h1-news-thanh" style={{ marginTop: "50px" }}>
            Shopping Cart
          </h1>
          <p className="p-news-thanh" style={{ marginBottom: "50px" }}>
            Homepage - Shopping Cart
          </p>
        </div>
        <div className="products-shoppingcart">
          {cart.length > 0 ? (
            cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="remove-from-cart-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
