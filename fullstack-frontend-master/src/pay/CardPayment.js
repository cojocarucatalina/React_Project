import React, { useState } from 'react';
import '../index.css';

function CardPayment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleSubmit1 = () => {
    alert("PAYMENT DONE! Check mail.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="cardNumber" className="form-label">
          Card Number:
        </label>
        <input
          type="text"
          id="cardNumber"
          className="form-control"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength="16" // Set max length to 16 for card number
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="expiryDate" className="form-label">
          Expiry Date:
        </label>
        <input
          type="text"
          id="expiryDate"
          className="form-control"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          maxLength="5" 
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cvv" className="form-label">
          CVV:
        </label>
        <input
          type="text"
          id="cvv"
          className="form-control"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength="3"
          required
        />
      </div>
      <button type="submit" className="send-button" onClick={handleSubmit1}>Submit</button>
    </form>
  );
}

export default CardPayment;
