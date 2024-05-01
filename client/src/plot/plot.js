import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Header from '../pages/header'
import Stock from '../pages/Detail'
import './plot.css'
import { useState } from 'react';
import MonthlyPlot from './Monthly_plot';
import DailyPlot from './One_day';
import IntradayPlot from './Intraday_plot';
import Year_Plot from './Year_plot';
import { useLocation } from 'react-router-dom';

const Plot = (props) => {
  // const location=useLocation();
  // const {state}=location;
  // console.log(state);
    const [daily,setDaily]=useState("daily");
   
    const daily_handler=(stock)=>{
           setDaily(stock);
    }
  return (
    <div className="root">
         <Header></Header>
         <div className='button_plot'>
           
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={()=>{daily_handler("daily")}}>Daily</Button>
        <Button onClick={()=>{daily_handler("day")}}>5 Day</Button>
        <Button onClick={()=>{daily_handler("month")}}>Monthly</Button>
        <Button onClick={()=>{daily_handler("year")}}>Year</Button>
      </ButtonGroup>
      {
           ( daily==="daily")?<DailyPlot/>:(daily==="month")?<MonthlyPlot/>:(daily==="day")?<IntradayPlot/>:<Year_Plot/>
          }
      </div>
          </div>
  )
}

export default Plot