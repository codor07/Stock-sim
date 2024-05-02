import React, { useState } from 'react'
import './details.css';
import BuyStock from './BuyStock';
import axios from 'axios';
import SellStock from './SellStock';

const Detail = ({details}) => {
  console.log(details);
  const [showBuy,setShowBuy]=useState();
  const [showSell,setShowSell]=useState();
  const handle_buy=()=>{
     setShowBuy(true);
  }
  const handle_sell=()=>{
    setShowSell(true);
  }
  const handle_watchlist=async ()=>{
    let allWatchList;
    const userDetail = await axios.post("http://localhost:8000/login-user", {
                email: details.email,
                password:details.password
    });

    allWatchList = userDetail.data.userInfo.company_watchlist;
    let ispresent = false;
    for(let item of allWatchList){
      if(item === details.name)ispresent = true;
    }
    if(ispresent){
      alert("company already present in your watchlist");

    }
    else{
      const response_watchlist = await axios.post("http://localhost:8000/update-watchlist", {
                email: details.email,
                newEntry: details.name,
                allWatchList: allWatchList,
    });
    alert("company added to your watchlist");
    }
    
  }

  return (
    <div className="stock">
      { 
        (!showBuy && !showSell?<> 
         <h2>{details.name}</h2>
        <p>Current Price: {details.currentPrice}{`${details.country=="India"?" Rs":" $"}`}</p>
        <p>Email:{details.email}</p>
        <div className="button-container">
      <button className="buy-button" onClick={handle_buy}>
        Buy
      </button>
      <button className="sell-button" onClick={handle_sell}>
        Sell
      </button>
      <button className="watchlist-button" onClick={handle_watchlist}>
        Watchlist
      </button>
    </div>
        </>:showBuy?<>
           <BuyStock  details={{companyName:details.name,currentPrice:details.currentPrice,email:details.email,password:details.password}}></BuyStock>
        </>:<>
           <SellStock  details={{companyName:details.name,currentPrice:details.currentPrice,email:details.email,password:details.password}}></SellStock>
        </>

        
      )
      }
     
    </div>
  );
}

export default Detail