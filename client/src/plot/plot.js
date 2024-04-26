import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Header from '../pages/header'
import './plot.css'
import { useState } from 'react';
import MonthlyPlot from './Monthly_plot';
import DailyPlot from './Daily_plot';
import IntradayPlot from './Intraday_plot';

const Plot = () => {
    const [daily,setDaily]=useState("daily");
   
    const daily_handler=(stock)=>{
           setDaily(stock);
    }
//     const month_handler=()=>{
//         if(month)
//           return;
//         setMonth(true);
// }
// const IntraDay_handler=()=>{
//     if(min)
//       return;
//     setMin(true);
// }
  return (
    <div className="root">
         <Header></Header>
         <div className='button_plot'>
           
    <ButtonGroup style={{marginLeft: '10px'}} variant="contained" color="primary" aria-label="contained primary button group">
        <Button style={{'margin' : '10px', 'border-radius' : '5px'}} color="secondary" onClick={()=>{daily_handler("daily")}}>Daily</Button>
        <Button style={{'margin' : '10px', 'border-radius' : '5px'}} color="secondary" onClick={()=>{daily_handler("month")}}>Monthly</Button>
        <Button style={{'margin' : '10px', 'border-radius' : '5px'}} color="secondary" onClick={()=>{daily_handler("day")}}>IntraDay(5min)</Button>
      </ButtonGroup>
         {
           ( daily==="daily")?<DailyPlot/>:(daily==="month")?<MonthlyPlot/>:<IntradayPlot/>
          }
          </div>
    </div>
  )
}

export default Plot