import { useContext } from "react";
import AppContext from "../context/AppContext";
import React from "react";
import Product from "./Product";
import "../styles/components/Products.css";

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    const random = Math.floor(Math.random() * 1000);
    const cartId = `${product.id}-${random}`;
    const newProduct = { ...product, cartId };
    addToCart(newProduct);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
