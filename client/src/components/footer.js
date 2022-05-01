import React from 'react'
import {Card} from "react-bootstrap"
import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function footer() {
    return (
        <div className="foot">
             <Card className="text-center" >
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Some Important References</Card.Title>
    <Card.Text className="links">
      <a href="https://disease.sh/">Disease.sh-<p>Used for stats</p></a>
      <a href="https://leafletjs.com/">Leaflet.js-<p>Used for map</p></a>
     
    </Card.Text>

  </Card.Body>
  <Card.Footer className="text-muted">Made with ❤ by Akash</Card.Footer>
  <Card.Footer className="text-muted"> Copyright © 2021</Card.Footer>
</Card>
        </div>
    )
}

export default footer
