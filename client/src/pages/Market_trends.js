import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './market_trends.css'
const Element = (item) => (
    <div className="box2">
       
         <p className='company_name'> {item.name}</p>
         <p>Current price: {item.price}</p>
         <p> Symbol: {item.symbol}</p>
         <p className='percent'> change: {item.change_percent}%</p>
         <p> exchange_close: {item.exchange_close}</p>
         <p> exchange_open: {item.exchange_open}</p>
    </div>
  );
function Market_trends() {
    const [trends,setTrends]=useState(undefined);
    const options = {
        method: 'GET',
        url: 'https://real-time-finance-data.p.rapidapi.com/market-trends',
        params: {
          trend_type: 'MOST_ACTIVE',
          country: 'us',
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '697c9f81cfmsha51928d583682a8p1a23aejsn3208779b6e6b',
          'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
      };
      
    const fetchdata=async()=>{
          try{
                   const response=await axios.request(options)
                   console.log(response.data);
                     console.log( response.data.data.trends);
                     setTrends( response.data.data.trends);
          }catch(err){
              console.log(err);
          }
     }
    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <>
  {trends==undefined?"NO market Trends ":
    <div className='market'>
      {trends.map((item, index) => (
          <Element key={index} {...item} />
        ))};
    </div>
    }
    </>

  )
}

export default Market_trends