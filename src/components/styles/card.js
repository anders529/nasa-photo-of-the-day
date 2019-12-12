import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const Cards = (props) => {
    const {picture, title, date} = props;
  return (
    <div>
      <Card style={{width: "25%"}}>
        <CardImg style={{width: "100%"}} top width="25%" src= {picture} alt="NASA image of the day" />
        <CardBody>
          <CardTitle><h2>Title: {title}</h2></CardTitle>
          <CardText><h4>Date: {date}</h4></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;