import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { Name, Image, Price, Rating, Category } = service;

  return (
    <div className="container gy-4">
      <Card>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>{Name}</Card.Title>
          <Card.Text>
            <h2>{Price}</h2>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
