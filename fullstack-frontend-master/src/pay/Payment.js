import React from "react";
import cashImage from "./cash-image.png";
import cardImage from "./card-image.png";
import { Link, useParams } from "react-router-dom";

//import "../ws/DisplayMessages.css"; // Import CSS file for styling
import "../index.css";

const Payment = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center", // Align items vertically in the center
  };

  const { id } = useParams();

  const optionStyle = {
    marginRight: "50px", // Increase the spacing between options
  };

  return (
    <div>
      <h2>Select Payment Method</h2>
      <div className="payment-options" style={containerStyle}>
        <div className="option" style={optionStyle}>
          <img src={cashImage} alt="Cash" />
          <Link  to={`/customer/${id}/payment-cash`} className="send-button" onClick={() => handlePayment("Cash")}>Cash</Link>
        </div>
        <div className="option" style={optionStyle}>
          <img src={cardImage} alt="Card" />
          <Link 
        // className="btn btn-danger mb-3" 
        to={`/customer/${id}/payment-card`} className="send-button" onClick={() => handlePayment("Card")}>Card</Link>
        </div>
      </div>
    </div>
  );
};

const handlePayment = (method) => {
  console.log(`Selected payment method: ${method}`);
  // You can add logic here to handle the selected payment method
};

export default Payment;
