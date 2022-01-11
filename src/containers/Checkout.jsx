import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import handleSumTotal from "../utils/handleSumTotal";
import { Link } from "react-router-dom";
import "../styles/components/Checkout.css";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (id) => () => {
    removeFromCart(id);
  };

 

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.cartId}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item.cartId)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
