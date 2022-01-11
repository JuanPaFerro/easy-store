import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setstate] = useState(initialState);

  const addToCart = (payload) => {
    setstate({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setstate({
      ...state,
      cart: state.cart.filter((i) => i.cartId !== payload),
    });
  };

  const addToBuyer = (payload) => {
    setstate({ ...state, buyer: [...state.buyer, payload] });
  };

  const addNewOrder = (payload) => {
    setstate({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addNewOrder,
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
  };
};

export default useInitialState;
