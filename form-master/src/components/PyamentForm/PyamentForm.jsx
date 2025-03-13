import React, { useState } from 'react';
import Cards from 'react-credit-cards';
// import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = () => {
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const handleInputFocus = (e) => {
    setCardData({ ...cardData, focus: e.target.name });
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
    e.preventDefault();
  };

  return (
    <div id="PaymentForm">
      <Cards
        cvc={cardData.cvc}
        expiry={cardData.expiry}
        focused={cardData.focus}
        name={cardData.name}
        number={cardData.number}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={cardData.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={cardData.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={cardData.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cardData.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;
