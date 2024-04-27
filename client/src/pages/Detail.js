import React, { useState } from 'react'
import './details.css'
import BuyStock from './BuyStock';
const Detail = ({details}) => {
  const [show,setShow]=useState();
  const handle_buy=()=>{
     setShow(true);
  }
  const handle_sell=()=>{
    
  }
  return (
    <div className="stock">
      { 
        (!show?<>  <h2>{details.name}</h2>
        <p>Current Price: ${details.currentPrice}</p>
        <div className="button-container">
      <button className="buy-button">
       
        Buy
      </button>
      <button className="sell-button">
        
        Sell
      </button>
      <button className="watchlist-button">
        
        Watchlist
      </button>
    </div>
        </>:<>
           <BuyStock  details={{companyName:details.name,currentPrice:details.currentPrice,balance:100000}}></BuyStock>
        </>)
      }
     
    </div>
  );
}

export default Detail