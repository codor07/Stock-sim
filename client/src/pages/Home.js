import React from 'react'
// import { useState } from 'react';
import Header from './header'
import Box from './Box';
import SearchBar from '../plot/Search';
// import Plot from '../plot/Plot';
import './box.css'
const Home = () => {
    // const [companyName,setCompanyName]=useState('');
    // const [companyAbout,setCompanyAbout]=useState('');
   
  return (
    
    <div className='root'>
      <Header></Header>
      <div className='home_container'>
         {/* <div className='plot'>
             <Plot></Plot>
         </div> */}
      <div className="SearchBar">
       <SearchBar></SearchBar>
        <Box></Box>
      </div>
      </div>
    </div>
  )
}

export default Home