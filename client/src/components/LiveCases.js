import React from 'react';
import "./Live_cases.css";
import numeral from "numeral";

function LiveCases({data}) {
    return (
        <div className="Live_cases">
            
            {
                data.map((countr)=>(
                    <tr>
                        <td>{countr.country}</td>
                        <td>{numeral(countr.active).format("0,0")}</td>
                    </tr>
                
                ))
            }
        </div>
    );
}

export default LiveCases;
