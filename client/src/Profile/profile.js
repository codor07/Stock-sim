// PortfolioPage.js
import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import './profile.css'
import axios from 'axios';
const PortfolioPage = () => {
  const location=useLocation();
  const {state}=location;
  console.log(state.val);
  const [profile,setProfile]=useState({});
  useEffect(()=>{
         storeData();
        
  },[]);
  const storeData=()=>{
       setProfile(state.val);
  }
  return (
    <div className="portfolio-container">
      <h2>My Stock Portfolio</h2>
      <div className="portfolio-details">
        <div className="portfolio-info">
        <p><strong>Id:</strong> {profile._id}</p>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Total Portfolio Value:</strong> ${profile.total_money}</p>
        </div>
        <div className="portfolio-stocks">
          <h3>Stock Holdings</h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
