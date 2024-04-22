import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file for styling
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../pages/box.css'
const SearchBar = () => {
  // State to store the search query
  const [value, setQuery] = useState('');
  const [details,setDetails]=useState(null);
  const [notFound,setNotfound]=useState("");
const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/search',
    params: {
      query: value,
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'ee4e2bab1bmshe865451e66a82bcp16bdb1jsn6dc8393b3b27',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data.data.stock[0]);
        setDetails(response.data.data.stock[0]);
    }catch(error){
         setNotfound("Not found ,May be companies name or symbol is incorrect")
        console.log(error);
    }
  };
  const Element = (companies) => (
    <div className="search_company">
            <p>  {companies.name}</p>
            <p>Symbol:   {companies.symbol}</p>
            <p>Current Price:  {companies.price } {companies.currency}</p>
    </div>
  );
  return (
    <>
    <div className="search-bar-container">
      <input
        type="text"
        value={value}
        onChange={handleSearchChange}
        placeholder="Search companies..."
        className="search-input"
        />
      <button onClick={handleSearchClick} className="search-button">Search</button>
    </div>
    <div>
       {details!=null? <Link to='/plot' state={details} className="BOX" >
              <Element {...details} />
        </Link>:notFound}
    </div>
        </>
  );
};

export default SearchBar;
