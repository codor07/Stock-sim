import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import './plot.css'
import PlotGraph from 'react-plotly.js';
import { useLocation } from 'react-router-dom';
import Stock from '../pages/Detail'
import CompanyNews from '../pages/home_news'
function Year_plot(props) {
   const  {state} =useLocation();
   console.log(state);
    const [Xaxis,setXAxis]=useState([]);
    const [Yaxis,setYAxis]=useState([]);
    const [f50axis,set50]=useState([]);
    const [f100axis,set100]=useState([]);
    const [f10axis,set10]=useState([]);
    const [windowSize, setWindowSize] = useState(10);
    const[movingAverage,setMovingAverage]=useState([]);
    const [name,setName]=useState("");
    const [currentPrice,setCurrentPrice]=useState("");
    const [country,setCountry]=useState("");
   
    const options = {
        method: 'GET',
        url: 'https://real-time-finance-data.p.rapidapi.com/stock-time-series',
        params: {
          symbol:state.item.symbol==null?"MSFT":state.item.symbol,
          period: "1Y",
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '9b8c7aedcbmsh6d6f47ae646a275p1c3bb1jsn368c27e109f6',
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
      // console.log(movingAverage);
      const movingDays=calculateMovingAverage(movingAverage,val);
      if(val==10){ 
        set10(movingDays);
      }
      else if(val==50){
        set50(movingDays);
      }
      else if(val==100)
          set100(movingDays);    
    };
      useEffect(() => {
     
        // Call the 'fetchData' function when the component mounts (empty dependency array)
        fetchData();
      }, []);
      
 // Handle select change

      const fetchData= async()=>{
        try {
           
            const response = await axios.request(options);
            console.log(response.data.data);
            setName(state.item.name);
            setCountry(state.item.country===undefined?state.item.country_code==="IN"?"India":"US":state.item.country)
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
      {/* <Header></Header> */}
        <div className='name_company'>
          <div> {name}</div>
          {/* <div> Market Value-{marketVal} {`${country==="India"?'INR':'$'}`}</div> */}
          <div> Country-{country}</div>
          <div > Last Traded Value:{currentPrice} {`${country==="India"?'INR':'$'}`}</div>
        </div>
        <div className='plot_graph'>
          <div className='button_plot'>

         
        <PlotGraph
          data={[
            {
              x:Xaxis,
              y:Yaxis,
              type: 'line',
              mode: 'lines+markers',
              marker: {color: 'green'},
            },
            {
              x:Xaxis,
              y:f10axis,
              type: 'line',
              mode: 'lines',
              marker: {color: 'red'},
            },
            {
              x:Xaxis,
              y:f50axis,
              type: 'line',
              mode: 'lines',
              marker: {color: 'blue'},
            }, {
              x:Xaxis,
              y:f100axis,
              type: 'line',
              mode: 'lines',
              marker: {color: 'orange'},
            }
          ]}
          layout={{width: 850, height: 540, title:`Company name: ${name}` }}
        />
         </div>
         <div className='Plot_First'>
         {state!=null?
          <Stock 
          details={{name:name,currentPrice:currentPrice,email:state.val.email,password:state.val.password,country:country}}>

          </Stock>:"Login again"}
    </div>
        </div>
       
        <div>
       
      <select value={windowSize} onChange={handleSelectChange}> Moving Average
        <option value="10"> Moving Average 10 Days</option>
        <option value="50">Moving Average 50 Days</option>
        <option value="100">Moving Average 100 Days</option>
      </select>
      {/* <div>Moving Average for {windowSize} days: {movingAverage.join(', ')}</div> */}
    </div>
    {
      state!=null?
      <CompanyNews val={"stock-news"} symbol={state.item.symbol}></CompanyNews>:"No news"
    }
    </div>
  )
}

export default Year_plot;
  