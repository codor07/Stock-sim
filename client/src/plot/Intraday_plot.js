import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import './plot.css'
import PlotGraph from 'react-plotly.js';
// import Header from '../pages/header';
import { useLocation } from 'react-router-dom';
function Intraday_plot() {
   const  {state} =useLocation();
    const [Xaxis,setXAxis]=useState([]);
    const [Yaxis,setYAxis]=useState([]);
    const [name,setName]=useState("");
    const [marketVal,setValue]=useState("");
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        interval: '5min',
        function: 'TIME_SERIES_INTRADAY',
        symbol: state.symbol,
        datatype: 'json',
        output_size: 'compact'
      },
      headers: {
        'X-RapidAPI-Key': 'c31d153c5dmsha381f7a79f346a1p1e1c62jsn1c0711182248',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };
      
      useEffect(() => {
   
        // Call the 'fetchData' function when the component mounts (empty dependency array)
        fetchData();
      }, []);
      

      const fetchData= async()=>{
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setName(state.name);
            setValue(state.marketValue)
            let stockChartXValuesFunction = [];
            let stockChartYValuesFunction = [];
            for (var key in response.data['Time Series (5min)']) {
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(response.data['Time Series (5min)'][key]['1. open']);
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
          <div> Market Value-{marketVal} $</div>
        </div>
        <div className='plot_graph'>
        <div> Intra Day </div>
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

export default Intraday_plot;
  