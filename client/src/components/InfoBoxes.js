import React from 'react';
import './InfoBoxes.css';
import {Card,CardContent,Typography} from "@material-ui/core";


function InfoBoxes({title, cases ,active, isRed, total, ...props}) {                 //InfoBoxes(props)
    return (
       <Card  className={`info-Box  ${active && "info-Box--selected"} ${isRed && "info-Box--red"}`}
         onClick={props.onClick}>
           <CardContent>

              <Typography className="info-Title" color="textSecondary">
                   {title}                                    {/*{props.title} */}
              </Typography>
              <h2 className={`info-Cases ${!isRed && "info-cases--green"}`}>
                   {cases}
              </h2>
              <Typography className="info-Total">
                   {total} Total
              </Typography>

           </CardContent>
       </Card>
    )
}

export default InfoBoxes;
