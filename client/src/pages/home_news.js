import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./market_trends.css"
const Element = (item) => (
    <div className="box3">
        <Link to={item.article_url} className='box4'> 
        <div className='article_photo'>
              <img className="news_image"
              src={item.article_photo_url} alt='alter_image' />
           </div>
       <div className='article_title'>
         <p className="title"> {item.article_title}</p>
         <span className='post_news'>post: {item.post_time_utc}</span>
         <span > source:{item.source}</span>
       </div>
          
        </Link>
    </div>
  );
function Market_news(props) {
  console.log(props.val);
  console.log(props.type);
  console.log(props.symbol)
    const [news,setNews]=useState(undefined);
    const options = {
        method: 'GET',
        url: `https://real-time-finance-data.p.rapidapi.com/${props.val}`,
        params: {
          trend_type: props.type,
          country: 'us',
          language: 'en',
          symbol:props.symbol
        },
        headers: {
          'X-RapidAPI-Key': 'c31d153c5dmsha381f7a79f346a1p1e1c62jsn1c0711182248',
          'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
      };
      
    const fetchdata=async()=>{
          try{
                   const response=await axios.request(options)
                   console.log(response.data);
                     console.log( response.data.data.news);
                     setNews( response.data.data.news);
          }catch(err){
              console.log(err);
          }
     }
    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <>
  {news==undefined?"NO market news ":
    <div className='market'>
      {news.map((item, index) => (
          <Element key={index} {...item} />
        ))};
    </div>
    }
    </>

  )
}

export default Market_news