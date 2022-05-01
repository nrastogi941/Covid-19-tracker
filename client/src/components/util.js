import React from "react"
import numeral from "numeral"
import { Marker, Circle, Popup } from "react-leaflet";

  const casesTypeStyle ={
    cases:{
        hex:"#CC1034",
        rgb:"rgb(204,16,52)",
        multiplier:800,
    },
    recovered:{
        hex:"#7dd71d",
        rgb:"rgb(125,215,29)",
        multiplier:1200,
    },
    deaths:{
        hex:"#fb4443",
        rgb:"rgb(251,68,67)",
        multiplier:2000,
    },
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";



export const sortData = (data) =>{
    const sortedData =[...data];

    sortedData.sort((a,b)=>(a.active > b.active ? -1 : 1));

    return sortedData;
};

//circles on map

export const showDataOnMap = (data,casesType="cases") => 

    data.map((bigData) =>(
      
           <Circle
      center={[bigData.countryInfo.lat,bigData.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeStyle[casesType].hex}
      fillColor={casesTypeStyle[casesType].hex}

      radius={Math.sqrt(bigData[casesType] / 12 ) * casesTypeStyle[casesType].multiplier}
      
      >
        
          <Popup>
              <div className="info_container">
                  <div
                  className="info_flag"
                  style={{backgroundImage:`url(${bigData.countryInfo.flag})`}}
                  ></div>
                  <div className="info_name"> {bigData.country} </div>
                  <div className="info_pop"> Population:{numeral(bigData.population).format("0.0a")} </div>
                  <div className="info_cases">Cases:{numeral(bigData.cases).format("0,0")}</div>
                  <div className="info_recovered">Recovered:{numeral(bigData.recovered).format("0,0")}</div>
                  <div className="info_deaths">Deaths:{numeral(bigData.deaths).format("0,0")}</div>
                  <div className="info_active">Active:{numeral(bigData.active).format("0,0")}</div>
              </div>



          </Popup>
     
      </Circle> 
    ));



