// import React from "react";
// import { useState,useEffect } from "react";
// import Axios from "axios";

// function Backened(){

//     const [country,setcountryname]= useState("");
//     const [cases,setcnfcases]= useState(0);

//     const updatedata=()=>{
//         // Axios.post('http://localhost:3001/create',{country:country,cases:cases}).then(()=>{
//         //   alert("successful insert");
//         //   console.log(country+cases);
//         // });
//          console.log(country+cases);
//     };

// return(
//     <>
//     <div> <h1>update data</h1></div>
//     <form>
//   <div class="form-row">
//     <div class="form-group col-md-3">
//       <label for="inputState">State</label>
//       <select id="inputState" type="text" class="form-control"
//       //   onChange={(event)=>{
//       //     setcountryname(event.target.value);
//       // }}
//       >
//         <option selected>Choose country Name..</option>
//         <option>india </option>
//         <option>srilanka </option>
//       </select>
//     </div>
//     <div class="form-group col-md-2">
//       <label for="inputZip">Confirmed cases</label>
//       <input type="number" class="form-control"  id="inputZip"
//       //  onChange={(event)=>{
//       //     setcnfcases(event.target.value);
//       // }}
//        />
//     </div>
//     <div class="form-group col-md-2">
//       <label for="inputZip">Recovered</label>
//       <input type="numbert" class="form-control" id="inputZip"
//            onChange={(event)=>{
//           setcountryname(event.target.value);
//       }}
//       />
//     </div>
//     <div class="form-group col-md-2">
//       <label for="inputZip">Death</label>
//       <input type="number" class="form-control" id="inputZip"
//             onChange={(event)=>{
//           setcnfcases(event.target.value);
//       }} 
//       />
//     </div>
//     <div class="form-group col-md-2">
//       <label for="inputZip">Active</label>
//       <input type="text" class="form-control" id="inputZip"/>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary" onClick={updatedata}>Update</button>
// </form>
// </>
// );
// }

// export default Backened;

// import "./App.css";
import { useState } from "react";
import Axios from "axios";
import "./Backened.css"

function Backened() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState("");
  const [recovered, setRecovered] = useState("");
  const [active, setActive] = useState(0);

  const [newCases, setNewCases] = useState(0);

  const [dataList, setDataList] = useState([]);

  const addData = () => {
    Axios.post("http://localhost:3001/create", {
      country: country,
      cases: cases,
      deaths:   deaths,
      recovered:    recovered,
      active: active,
    }).then(() => {
      alert("data added successfully");
      setDataList([
        ...dataList,
        {
          country: country,
          cases: cases,
          deaths:   deaths,
          recovered:    recovered,
          active: active,
        },
      ]);
    });
  };

  const getData = () => {
    Axios.get("http://localhost:3001/countrydata").then((response) => {
      setDataList(response.data);
    });
  };

  const updateData = (country) => {
    Axios.put("http://localhost:3001/update", { cases: newCases, country: country}).then(
      (response) => {
        alert("data updated successfully");
        setDataList(
          dataList.map((val) => {
            return val.country == country
              ? {
                  // id: val.id,
                  country: val.country,
                  cases: newCases,
                  deaths: val.deaths,
                  recovered: val.recovered,
                  active:val.active,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteData = (country) => {
    Axios.delete(`http://localhost:3001/delete/${country}`).then((response) => {
      alert("data deleted successfully");
      setDataList(
        dataList.filter((val) => {
          return val.country!= country;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Cases:</label>
        <input
          type="number"
          onChange={(event) => {
            setCases(event.target.value);
          }}
        />
        <label>Deaths:</label>
        <input
          type="number"
          onChange={(event) => {
            setDeaths(event.target.value);
          }}
        />
        <label>Recovered:</label>
        <input
          type="number"
          onChange={(event) => {
            setRecovered(event.target.value);
          }}
        />
        <label>active:</label>
        <input
          type="number"
          onChange={(event) => {
            setActive(event.target.value);
          }}
        />
        <button onClick={addData}>Add Data</button>
      </div>
      <div className="employees">
        <button onClick={getData}>Show Data</button>

        {dataList.map((val, key) => {
          return (
            <div className="showintable">
              <div>
                <h3>country: {val.country}</h3>
                <h3>cases: {val.cases}</h3>
                <h3>deaths: {val.deaths}</h3>
                <h3>recovered: {val.recovered}</h3>
                <h3>active: {val.active}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewCases(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateData(val.country);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteData(val.country);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Backened;