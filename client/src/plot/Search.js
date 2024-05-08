import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file for styling
import axios from 'axios'
// import { Link } from 'react-router-dom';
import SearchPlot from './searchplot'
import '../pages/box.css'
import { useNavigate } from 'react-router-dom';
const SearchBar = (props) => {
  const navigate=useNavigate();
  console.log(props.userInfo)
  // State to store the search query
  const [value, setQuery] = useState('');
  const [details,setDetails]=useState(null);
  const [notFound,setNotfound]=useState(null);
const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/search',
    params: {
      query: value,
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'c31d153c5dmsha381f7a79f346a1p1e1c62jsn1c0711182248',
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
        setNotfound("Not found ,May be companies name or symbol is incorrect");
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
    {
      notFound==null?   <div className="search-bar-container">
      <input
        type="text"
        value={value}
        onChange={handleSearchChange}
        placeholder="Search companies..."
        className="search-input"
        />
      <button onClick={handleSearchClick} className="search-button">Search</button>
    </div>:  <div>
                 {details==null?<div>
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
       <div>No found </div>
                 </div>:
                  navigate('/search',{state:{val:props.userInfo,search:details}})
                //  <SearchPlot search={details} val={props.userInfo}></SearchPlot>
                 }
      </div>
    }
 
  
        </>
  );
};

export default SearchBar;
