import React from 'react'
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"
import "./Cards.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({isImg, ...props}) {
    return (
        <div>
  <Card className={`Card ${isImg && "img"}`}  style={{ width: '18rem' }}>
<Card.Img className="Card_img" variant="top" src={props.src} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.text}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{props.first}</ListGroupItem>
    <ListGroupItem>{props.second}</ListGroupItem>
    <ListGroupItem>{props.third}</ListGroupItem>
  </ListGroup>
</Card>
        </div>
    )
}

export default Cards
