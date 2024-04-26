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
        <div className="buttons">
          <button className="buy-button" onClick={handle_buy}>Buy</button>
          <button className="sell-button" onClick={handle_sell}>Sell</button>
        </div>
        </>:<>
           <BuyStock  details={{companyName:details.name,currentPrice:details.currentPrice,balance:100000}}></BuyStock>
        </>)
      }
     
    </div>
  );
}

export default Detail