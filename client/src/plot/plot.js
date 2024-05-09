import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Header from '../pages/header'
import './plot.css'
import { useState } from 'react';
import MonthlyPlot from './Monthly_plot';
import DailyPlot from './One_day';
import Year_Plot from './Year_plot';
import { useLocation } from 'react-router-dom';

const Plot = (props) => {
  const location=useLocation();
  const {state}=location;
 
    const [daily,setDaily]=useState("daily");
    const [activeButton, setActiveButton] = useState("daily");

   
    const daily_handler=(stock)=>{
           setDaily(stock);
           setActiveButton(stock);
    }
  return (
    <div className="root">
         <Header userInfo={{state}}></Header>
         <div className='button_plot'>
           
    <ButtonGroup style={{margin: '5px' }} variant="contained" color="primary" aria-label="contained primary button group">
        <Button style={{ marginRight: '3px', borderRadius: '5px' }} 
          variant={activeButton === 'daily' ? 'contained' : 'outlined'}
          color={activeButton === 'daily' ? 'primary' : 'default'}
        onClick={()=>{daily_handler("daily")}}>Daily</Button>
        <Button style={{ marginRight: '3px', borderRadius: '5px' }} 
         variant={activeButton === 'month' ? 'contained' : 'outlined'}
         color={activeButton === 'month' ? 'primary' : 'default'}
        onClick={()=>{daily_handler("month")}}>Monthly</Button>
        <Button style={{ borderRadius: '5px' }} 
         variant={activeButton === 'year' ? 'contained' : 'outlined'}
         color={activeButton === 'year' ? 'primary' : 'default'}
        onClick={()=>{daily_handler("year")}}>Year</Button>
      </ButtonGroup>
      {
           ( daily==="daily")?<DailyPlot search={props.search}/>:(daily==="month")?<MonthlyPlot/>:(daily==="year")?<Year_Plot/>:<DailyPlot/>
          }
      </div>
          </div>
  )
}

export default Plot