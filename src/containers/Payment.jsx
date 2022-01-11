import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import handleSumTotal from "../utils/handleSumTotal";
import { PayPalButton } from "react-paypal-button-v2";
import "../styles/components/Payment.css";

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      "AQ8oYFFaAgOQ5IXf7-RgianU3pyE0sFEwqIfZiXBGAO0m5rKkndyey2VW62w8xjzNTIGsAPBtclRiR1U",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer: buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log("start payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
