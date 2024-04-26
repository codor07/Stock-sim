import React, { useState } from 'react';
import './details.css'; 
const BuyStock = ({ details }) => {
  const [quantity, setQuantity] = useState(0);

  const handleBuy = () => {
    const totalPrice = quantity * details.currentPrice;
    if(totalPrice==0){
      alert("0 stocks!");
      return;
    }
      
    if (totalPrice > details.balance) {
      alert("Insufficient balance to buy this quantity of stocks!");
      return;
    }
    details.balance-=totalPrice;
    alert(`You've successfully bought ${quantity} stocks of ${details.companyName}`);
  }

  const handleChangeQuantity = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  }

  return (
    <div className="buy-stock">
      <h2>{details.companyName}</h2>
      <p>Current Price: ${details.currentPrice}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input 
        type="number" 
        id="quantity" 
        value={quantity} 
        onChange={handleChangeQuantity}  
      />
      <p>Available Balance: ${details.balance}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default BuyStock;
