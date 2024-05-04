import React, { useState, useEffect } from 'react';
import './details.css'; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const BuyStock = ({ details }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(0);
  };
  const [quantity, setQuantity] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  // const [userDetails, setUserDetails] = useState(null);

  const handleBuy = async () => {
    const totalPrice = quantity * details.currentPrice;
    if(totalPrice==0){
      alert("0 stocks!");
      return;
    }
      
    if (totalPrice > userBalance) {
      alert("Insufficient balance to buy this quantity of stocks!");
      return;
    }
    let newBal = userBalance - totalPrice;
    const userDetail = await axios.post("http://localhost:8000/login-user", {
      email: details.email,
      password: details.password,
    });
    
    const response = await axios.post("http://localhost:8000/buy-stock", {
                email: details.email,
                newBalance: newBal,
                quantity: quantity,
                company_name: details.companyName,
                company_invested:userDetail.data.userInfo.company_invested,
    });

    setUserBalance(newBal);

    alert(`You've successfully bought ${quantity} stocks of ${details.companyName}`);
  }

  const handleChangeQuantity = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  }

  useEffect(() => {
    // Fetch data from an API
    const asyncFn = async () => {
      const response = await axios.post("http://localhost:8000/login-user", {
                email: details.email,
                password: details.password,
    });
    setUserBalance(response.data.userInfo.total_money);
    // setUserDetails(response.data.userInfo.company_invested);
    console.log(response);
    };
    asyncFn();
  });
  return (
    <>
   <div>
      <button className="arrow-back" onClick={handleGoBack}></button>
    </div>
    <div className="buy-stock">
      <h2>{details.companyName}</h2>
      <p>Current Price: ${details.currentPrice}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input 
        type="number" 
        id="quantity" 
        value={quantity} 
        min = "0"
        onChange={handleChangeQuantity}  
      />
      <p>Available Balance: ${userBalance}</p>
      <button className='button' 
      onClick={handleBuy}>Buy</button>
    </div>
    </>
  );
}

export default BuyStock;
