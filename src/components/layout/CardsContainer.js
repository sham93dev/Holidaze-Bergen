import React from "react";
import { Card, Button } from "react-bootstrap";

function CardsContainer() {
  return (
    <div className="cards-wrapper">
      <h2>Things to try out in our city</h2>
      <div className="cards-container">
        <Card className="cards">
          <Card.Img className="cards-img" variant="top" src="/assets/boat.jpg" />
          <Card.Body>
            <Card.Title className="cards-title">Bryggen</Card.Title>
            <Card.Text>Lorem ipsum ultrice posuere augue ultraces postereLorem ipsum ultrice posuere augue ultraces postere ultrice posuere augue ultraces postere.</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img className="cards-img" variant="top" src="/assets/concert.jpg" />
          <Card.Body>
            <Card.Title className="cards-title">Byfestivalen</Card.Title>
            <Card.Text>Lorem ipsum ultrice posuere augue ultraces postereLorem ipsum ultrice posuere augue ultraces postere ultrice posuere augue ultraces postere.</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img className="cards-img" variant="top" src="/assets/hike.jpg" />
          <Card.Body>
            <Card.Title className="cards-title">Fløyen</Card.Title>
            <Card.Text>Lorem ipsum ultrice posuere augue ultraces postereLorem ipsum ultrice posuere augue ultraces postere ultrice posuere augue ultraces postere.</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img className="cards-img" variant="top" src="/assets/aquraium.jpg" />
          <Card.Body>
            <Card.Title className="cards-title">Visit the Aquarium</Card.Title>
            <Card.Text>Lorem ipsum ultrice posuere augue ultraces postereLorem ipsum ultrice posuere augue ultraces postere ultrice posuere augue ultraces postere.</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardsContainer;
