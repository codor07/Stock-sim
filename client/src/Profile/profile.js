// PortfolioPage.js
import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import './profile.css'
import axios from 'axios'
import Watchlist from './watchlist_invested';
const PortfolioPage = () => {
  const location=useLocation();
  const {state}=location;
  console.log(state.val.email);
  const [profile,setProfile]=useState(null);
  useEffect(()=>{
        fetchData();
         
  },[]);
  const fetchData=async ()=>{
     try{
      const response = await axios.post("http://localhost:8000/login-user", {
        email: state.val.email,
        password:state.val.password,
      });
      console.log(response.data.userInfo)
      setProfile(response.data.userInfo)
     }catch(err){
      console.log(err)
     }
     
    }
  return (
    <>
    {
      state!=null&&profile!=null?
    
    <div className="portfolio-container">
      <h2 className='portfolio_name'>My Stock Portfolio</h2>
      <div className="portfolio-details">
        <div className="portfolio-info">
        <p><strong>Id:</strong> {profile._id}</p>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Total Portfolio Value:</strong> ${profile.total_money}</p>
        </div>
        <div className="portfolio-stocks">
          <h3>Watchlist</h3>
          {console.log(profile.company_watchlist.length)}
          <ul>
        {profile!=null?profile.company_watchlist.length>0?profile.company_watchlist.map((item, index) => (
          // <li key={index}>{item}</li>
          <li key={index}>
            <Watchlist item={item} />
          </li>
        )):"no watchlist added":"Some Error Occured"}
      </ul>
      {/* <h3>Company Invested</h3>
          
        {profile!=null?profile.company_invested.length>0?profile.company_invested.map((item, index) => (
          <li style={{backgroundColor: 'red', width: '30%' }} key={index}>{item.name} {item.quantity}</li>
          
        )):"No Invested":"Some Error Occured"}
      */}
      <h3>Company Invested</h3>
    <div className="company-list" style={{ borderBottom: '2px solid black', width: '420px', borderRadius: '4px' }}>
      {profile.company_invested.length > 0 ? (
        profile.company_invested.map((item, index) => (
          <div className="company-item" key={index}>
            <div className="company-name" ><strong>Company:</strong> {item.name}</div>
            <div className="company-quantity" ><strong>Quantity:</strong> {item.quantity}</div>
          </div>
        ))
      ) : (
        "No Invested"
      )}
    </div>

          
        </div>
      </div>
    </div>
:<div>Login first </div>}
    </>
  );
};

export default PortfolioPage;
