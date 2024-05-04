import React, { useState, useEffect } from 'react';
import './details.css'; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const SellStock = ({ details }) => {
  //console.log(111);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(0);
  };
  const [quantity, setQuantity] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const [ownedCurrently, setOwnedCurrently] = useState(0);
  const [userDetails, setUserDetails] = useState();

  const handleSell = async () => {
    if(quantity == 0){
      alert("0 stocks!");
      return;
    }
    console.log(ownedCurrently);
    if (quantity > ownedCurrently) {
      
      alert("You don't own the amount of stocks you want to sell!! ");
      return;
    }

    //let newQuantity = ownedCurrently - quantity;
    
    let newBalance = userDetails.total_money +  (quantity * details.currentPrice);

    const response = await axios.post("http://localhost:8000/sell-stock", {
                email: details.email,
                ownedCurrently:ownedCurrently,
                quantity:quantity,
                newBalance: newBalance,
                company_name: details.companyName,
                company_invested:userDetails.company_invested,
    });
    console.log(response);
    setUserBalance(newBalance);

    alert(`You've successfully sold ${quantity} stocks of ${details.companyName}`);
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
    setUserDetails(response.data.userInfo);

    setUserBalance(response.data.userInfo.total_money);
    //delay(100);
    for(let item of response.data.userInfo.company_invested){
      if(item.name === details.companyName){
        setOwnedCurrently(item.quantity);
        console.log(55555);
      }
    }
    console.log(response.data.userInfo.company_invested);
    };
    asyncFn();
  },[]);

  return (
    <>
    <div>
      <button className="arrow-back" onClick={handleGoBack}></button>
    </div>
  
    <div className="sell-stock">
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
      <p>Currenntly you own {ownedCurrently} stock of this company</p>
      <button className='sell-button' onClick={handleSell}>Sell</button>
    </div>
    </>
  );
}

export default SellStock;
