import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import './plot.css'
import PlotGraph from 'react-plotly.js';
// import Header from '../pages/header'
import { useLocation } from 'react-router-dom';
function Year_Plot(props) {
   const  {state} =useLocation();
    const [Xaxis,setXAxis]=useState([]);
    const [Yaxis,setYAxis]=useState([]);
    const [name,setName]=useState("");
    const [marketVal,setValue]=useState("");
    const [currentPrice,setCurrentPrice]=useState("");
    const [country,setCountry]=useState("");
    const options = {
        method: 'GET',
        url: 'https://real-time-finance-data.p.rapidapi.com/stock-time-series',
        params: {
          symbol:state.symbol,
          period: "1Y",
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': 'ee4e2bab1bmshe865451e66a82bcp16bdb1jsn6dc8393b3b27',
          'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
      };
      
      useEffect(() => {
     
        // Call the 'fetchData' function when the component mounts (empty dependency array)
        fetchData();
      }, []);
      

      const fetchData= async()=>{
        try {
           
            const response = await axios.request(options);
            console.log(response.data.data);
            setName(state.name);
            setValue(state.marketValue===undefined?"NA":state.marketValue)
            setCountry(state.country===undefined?state.country_code==="IN"?"India":"US":state.country)
            let stockChartXValuesFunction = [];
            let stockChartYValuesFunction = [];
                setCurrentPrice(response.data.data.price);

            for (var key in response.data.data['time_series']) {
              
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(response.data.data['time_series'][key]['price']);
              }
              setXAxis(stockChartXValuesFunction);
              setYAxis(stockChartYValuesFunction);
        } catch (error) {
            console.error(error);
        }
      }
  return (
    <div>
      {/* <Header></Header> */}
        <div className='name_company'>
          <div> {name}</div>
          <div> Market Value-{marketVal} {`${country==="India"?'INR':'$'}`}</div>
          <div> Country-{country}</div>
          <div > Current Price:{currentPrice} {`${country==="India"?'INR':'$'}`}</div>
        </div>
        <div className='plot_graph'>
        <div> Daily </div>
        <PlotGraph
          data={[
            {
              x:Xaxis,
              y:Yaxis,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'green'},
            }
          ]}
          layout={{width: 720, height: 440, title:`Company name: ${name}` }}
        />
        </div>
    </div>
  )
}

export default Year_Plot;
  