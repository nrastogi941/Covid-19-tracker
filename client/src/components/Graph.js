import{ React ,useState, useEffect} from 'react';
import {Line} from "react-chartjs-2";
import numeral from "numeral";



const options = {
 plugins:{
    legend: {
      display: false,
  },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("0.0a");
        },
      },
    },
    scales: {
      xAxis: 
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      
      yAxis: 
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value,index,display) {
              return numeral(value).format("0a");
            },
          },
        },
      
    },
  },
  };

  const buildChartData = (data, typeCases="cases",graphCountry) => {
    if(graphCountry==="Worldwide"){

    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[typeCases][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[typeCases][date];
    }
    return chartData;
  }
  else{
    let chartData = [];
    let lastDataPoint;
    for (let date in data.timeline.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data.timeline[typeCases][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data.timeline[typeCases][date];
    }
    return chartData;
  }
  
  };

  function Graph({typeCases,graphCountry}) {
    const [data, setData] = useState({});
  
    
    useEffect(() => {
      const fetchData = async () => {
        const url=
        graphCountry === "Worldwide" ? "https://disease.sh/v3/covid-19/historical/all?lastdays=120" : `https://disease.sh/v3/covid-19/historical/${graphCountry}?lastdays=120`;
       
        await fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            let chartData = buildChartData(data, typeCases,graphCountry);
            setData(chartData);
            console.log(chartData);
            // buildChart(chartData);
          });
      };
  
      fetchData();
    }, [typeCases,graphCountry]);

    return (
      <div>
        {data?.length > 0 && (
          <Line
            options={options}
            data={{
              datasets: [
                { 
                  fill:true,
                  backgroundColor: "rgba(204, 16, 52, 0.5)",
                 
                  borderColor: "#CC1034",
                  data: data,
                },
              ],
            }}
          
          />
        )}
      </div>
    );
  }
  
  export default Graph;

