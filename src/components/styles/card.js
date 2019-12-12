import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const Cards = (props) => {
    const {picture, title, date} = props;
  return (
    <div>
      <Card>
        <CardImg top width="25%" src= {picture} alt="NASA image of the day" />
        <CardBody>
          <CardTitle>Title: {title}</CardTitle>
          <CardText>Date: {date}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;