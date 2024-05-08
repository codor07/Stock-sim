import React from 'react'
// import { useState } from 'react';
import Header from './header'
import Box from './Box';
import SearchBar from '../plot/Search';
// import Marketrends from './Market_trends';
import News from './home_news'
import './box.css'
import { useLocation } from 'react-router-dom';
const Home = () => {
   const location=useLocation();
   const {state}=location;
   console.log(state)
  return (
  <>
  {state==null?<h2>Login First to watch home page</h2>:
    <div className='root'>
      <Header userInfo={{state}}></Header>
      <div className='home_container'>
      <div className="SearchBar">
       <SearchBar userInfo={{state}}></SearchBar>
        <Box userInfo={{state}}></Box>
      </div>
        <div className='market_trends'>
      <News val={"market-trends"} type="MOST_ACTIVE"></News>
        </div>
      </div>
           {/* <Marketrends></Marketrends> */}
    </div>
}
    </>
  )
}

export default Home