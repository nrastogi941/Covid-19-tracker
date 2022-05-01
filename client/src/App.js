import React,{useState,useEffect} from 'react';
import './App.css';
import {Card,CardContent,Typography} from "@material-ui/core";
import {FormControl,Select,MenuItem} from "@material-ui/core";
import InfoBoxes from "./components/InfoBoxes";
import Map from "./components/Map";
import Graph from "./components/Graph";
import LiveCases from "./components/LiveCases";
import {sortData,  prettyPrintStat} from "./components/util";
import "leaflet/dist/leaflet.css";
import numeral from "numeral";
import Carosel from './components/Carosel';
import Cards from "./components/Cards";
import Footer from "./components/footer"
import Backened from './components/Backened';





function App() {
  const[countries,setCountries] = useState([]);
  const[selectedCountry,setSelectedCountry] = useState("Worldwide");
  const[selectedCountryInfo,setSelectedCountryInfo] = useState({});
  const[tableData,setTableData] = useState([]);
  const[casesType,setCasesType] = useState("cases");
  const[mapZoom,setMapZoom]= useState(3);
  const[mapCenter,setMapCenter]= useState({lat:34.80746, lng:-40.4796});
  const[mapCountries,setMapCountries] = useState([]);
  const[graphCountry,setGraphCountry] = useState("Worldwide");

 
  
 
 
  
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then ((response) => response.json())
    .then((data)=> {
      setSelectedCountryInfo(data);
    });
  },[]);

  useEffect(()=>{                                                             //useEffect(function,array) Inside the useEffect the written code run 
        //async=> send a request,wait for it,do something with info           //once component loads and not again but if we give something like 
      const getCountriesData= async () =>{                                    // state var countries in array then that code will run everytime
           await fetch("https://disease.sh/v3/covid-19/countries")            // when var changes its value.
           .then ((response) => response.json())
           .then((data)=> {
            const countriesName = data.map((big)=>(
              {
                  name:  big.country,            //india
                  value: big.country,           //ind
                  flag:  big.countryInfo.flag
              }
            ));
            
            setCountries(countriesName);
            const sortedData= sortData(data);
            setTableData(sortedData);
            setMapCountries(data);
           });                                                                  
      };
 
      getCountriesData();
  },[]);


 

     
    //async function onChangeCountry(event){
     const onChangeCountry = async (event) =>{
     const yourCountry = event.target.value;

     setGraphCountry(yourCountry);

     const url = 
     yourCountry === "Worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${yourCountry}`;

     await fetch(url)
     .then((response)=> response.json())
     .then((data)=>{
           setSelectedCountry(yourCountry);                           // update input field
           setSelectedCountryInfo(data);                              // returns All data from selected country 
         
           

           
            
           setMapCenter(yourCountry==="Worldwide" ? {lat: 34.80746, lng: -40.4796} : [data.countryInfo.lat,data.countryInfo.long]);
           setMapZoom(yourCountry==="Worldwide" ? 3 : 4);
     });
     
   };

   function handledClickCases(e){
    setCasesType("cases");
  }

   function handledClickRecovered(e){
     setCasesType("recovered");
   }

   function handledClickDeaths(e){
    setCasesType("deaths");
  }

  const date = new Date();
  const res = date.getDate() + "  " + date.toLocaleString("default",{month:"long"}) + ' , ' + date.toLocaleString([],{hour: '2-digit',minute: '2-digit'});



  


  return (
  <div>
   <div className="app">
    <div className="app_left">
      <div class="header">

      <h1 class="heading">COVID-19 TRACKER</h1>
      
  
            <FormControl className="dropdown">
            <Select 
            variant="outlined" 
            value={selectedCountry}
            onChange={onChangeCountry}
            >
            
            <MenuItem value="Worldwide"><img className="world_img" alt="flags" src="https://www.ecosystemmarketplace.com/wp-content/uploads/2016/04/WorldBankLogo.jpg"></img>Worldwide</MenuItem>
          {
            countries.map((country)=> (                                  // function (country)
              <MenuItem value={country.value}><img className="country_img" alt="flags" src={country.flag}></img>{country.name}
      
              </MenuItem>
            ))
          }
         
              </Select>
             </FormControl>
          
           
        
      </div>
      <p class="para">(As of {res})</p>

      <div class="info_stats">
        <InfoBoxes isRed  active={casesType === "cases"} onClick={handledClickCases} title="Coronavirus cases" cases={prettyPrintStat(selectedCountryInfo.todayCases)} total={numeral(selectedCountryInfo.cases).format("0.0a")}></InfoBoxes>
        <InfoBoxes  active={casesType === "recovered"} onClick={handledClickRecovered} title="Recovered" cases={prettyPrintStat(selectedCountryInfo.todayRecovered)} total={numeral(selectedCountryInfo.recovered).format("0.0a")}></InfoBoxes>
        <InfoBoxes isRed  active={casesType === "deaths"} onClick={handledClickDeaths}  title="Deaths" cases={prettyPrintStat(selectedCountryInfo.todayDeaths)} total={numeral(selectedCountryInfo.deaths).format("0.0a")} ></InfoBoxes>
        
      </div>
      
                     
    <Map
    countries={mapCountries}
    casesType={casesType}
    center={mapCenter}
    zoom={mapZoom}
    
    ></Map>

    </div>


    <div className="app_right">
    <Card  variant="outlined" className="active_cases">
      <CardContent>
          <h1>Active cases by country</h1>
          <LiveCases data={tableData}></LiveCases>
      </CardContent>
    </Card>

    <Card  variant="outlined" className="g">
      <CardContent>
           
          <h1 class="graph-heading"> {selectedCountry} {casesType}</h1>
          <Graph
          typeCases={casesType}
          graphCountry={graphCountry}
          
          ></Graph>
      </CardContent>
    </Card>
    </div>
        

   </div>

   <div className="car_bg">
       <div className="app_car">
          <Carosel></Carosel>
      </div>
  </div>
  <div className="backdiv">
  <Backened></Backened>
  </div>
  <div className="Card_bg">
   <div className="Cards">
     <Cards
     src={"https://th.bing.com/th/id/OIP.d3UDVOr7mU0IVqZFALTkogHaE8?w=285&h=190&c=7&o=5&dpr=1.25&pid=1.7"}
     title={"Precautions"}
     text={"With coronavirus threatening to run riot in India, here's how you can keep yourself safe from the scourge.Stopping the spread starts with you."}
     first={"Social Distancing"}
     second={"Hand Sanitisation"}
     third={"Wear Mask"}

     ></Cards>
     <Cards
     isImg
     src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mhEFqYyFkGjFzV1TnvbZWw2fCWe54DgEdg&usqp=CAU"}
     title={"Symptoms"}
     text={"COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."}
     first={"Fever"}
     second={"Dry Cough"}
     third={"Tiredness"}

     ></Cards>
     <Cards
     isImg
     src={"https://www.nipro-group.com/sites/default/files/styles/vrije_dimensie/public/2020-03/shutterstock_1660430236.jpg?h=876256c3&itok=I4KFIYxR"}
     title={"Covid Impact"}
     text={"Impact of COVID-19 on people's livelihoods, their health and our food systems.It Affected Economically And Socially Both."}
     first={"Poor cash flow in the market"}
     second={"Requirement for high protection"}
     third={"Disruption of celebration of cultural and religious festives."}
     
     ></Cards>
    </div>
  </div>

 <div>
   <div>
     <Footer></Footer>
   </div>
</div>


</div>
  );
}

export default App;
