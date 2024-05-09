import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import './plot.css'
import PlotGraph from 'react-plotly.js';
import Stock from '../pages/Detail'
import CompanyNews from '../pages/home_news'
import { useLocation } from 'react-router-dom';
import Header from '../pages/header'
function SearchPlot(props) {
    const location=useLocation();
    const {state}=location;
    console.log(state)
   console.log(state.val.state.val);
   console.log(state.search);
    const [Xaxis,setXAxis]=useState([]);
    const [Yaxis,setYAxis]=useState([]);
    const [f50axis,set50]=useState([]);
    const [f100axis,set100]=useState([]);
    const [windowSize, setWindowSize] = useState(10);
    const[movingAverage,setMovingAverage]=useState([]);
    const [name,setName]=useState("");
    const [currentPrice,setCurrentPrice]=useState("");
    const [country,setCountry]=useState("");
   
    const options = {
        method: 'GET',
        url: 'https://real-time-finance-data.p.rapidapi.com/stock-time-series',
        params: {
          symbol:state.search==null?"MSFT":state.search.symbol,
          period: "1D",
          language: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '7c78eb2769msh093d9065f815be7p1715eajsn685e47bf8bb8',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
          }
      };
      const calculateMovingAverage = (data, windowSize) => {
        let movingAverages = [];
        let sum = 0;
        for (let i = 0; i < windowSize; i++) {
          sum += data[i];
        }
        movingAverages.push(sum / windowSize);
        for (let i = windowSize; i < data.length; i++) {
          sum = sum - data[i - windowSize] + data[i];
          movingAverages.push(sum / windowSize);
        }
  
        return movingAverages;
    }
    const handleSelectChange = (e) => {
      const val=e.target.value;
      console.log(val)
      setWindowSize(val);
      const movingDays=calculateMovingAverage(movingAverage,val);
      if(val==50){ 
        set50(movingDays);
      }
      else if(val==100){
        set100(movingDays);
      }
          
    };
      useEffect(() => {
        fetchData();
      }, []);
      
      const fetchData= async()=>{
        try {
           
            const response = await axios.request(options);
            console.log(response.data.data);
             setName(state.search!==undefined?state.search.name:"MicroSoft")
            setCountry(state.search.country===undefined?state.search.country_code==="IN"?"India":"US":state.search.country)
            let stockChartXValuesFunction = [];
            let stockChartYValuesFunction = [];
                setCurrentPrice(response.data.data.price);
               let moving=[];
            for (var key in response.data.data['time_series']) {
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(response.data.data['time_series'][key]['price']);
                moving.push(response.data.data['time_series'][key]['price']);
              }
               setMovingAverage(moving);
              setXAxis(stockChartXValuesFunction);
              setYAxis(stockChartYValuesFunction);
        } catch (error) {
            console.error(error);
        }
      }
     
  return (
    <div>
          <Header userInfo={state.val}></Header>
        <div className='name_company'>
          <div> {name}</div>
          <div> Country:{country}</div>
          <div > Last Traded Value:{currentPrice} {`${country==="India"?'INR':'$'}`}</div>
        </div>
        <div className='plot_graph'>
          <div className='button_plot'>
        <PlotGraph
          data={[
            {
              x:Xaxis,
              y:Yaxis,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'green'},
            },
            {
              x:Xaxis,
              y:f50axis,
              type: 'line',
              mode: 'lines',
              marker: {color: 'red'},
            },
            {
              x:Xaxis,
              y:f100axis,
              type: 'line',
              mode: 'lines',
              marker: {color: 'blue'},
            }
          ]}
          layout={{width: 850, height: 540, title:`Company name: ${name}` }}
        />
         </div>
         <div className='Plot_First'>
          {state!=null?
          <Stock 
          details={{name:name,currentPrice:currentPrice,email:state.val.state.val.email,password:state.val.state.val.password,country:country}}>

          </Stock>:"Login again"}
    </div>
        </div>
        <div>
      <select value={windowSize} onChange={handleSelectChange}>
        <option value="50">50 Days</option>
        <option value="100">100 Days</option>
      </select>
    </div>
    {
      state.search!=null?
      <CompanyNews val={"stock-news"} symbol={state.search.symbol}></CompanyNews>:"No news"
    }
    </div>
  )
}

export default SearchPlot;
  