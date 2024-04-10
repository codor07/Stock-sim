// PortfolioPage.js
import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
const PortfolioPage = () => {
  const location=useLocation();
  const {state}=location;
  console.log(state.val);
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchHoldings = async () => {
      try {
        // Fetch holdings data from an API endpoint
        
        // setHoldings(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  return (
    <div>
      <h2>My Portfolio</h2>
      
    </div>
  );
};

export default PortfolioPage;
