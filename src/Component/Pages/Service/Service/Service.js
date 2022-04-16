import React from "react";
import { Button, Card} from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { Name, Image, Price, Rating, Category } = service;

  return (
    <div className="container gy-4">
      <Card>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
        <div className="service_info d-flex align-items-center justify-content-between">
            <p className="info_title">{Category}</p>
            <p className="text-success fw-bold"><small>{Rating}</small></p>
        </div>
          <Card.Title className="text-secondary mb-2">{Name}</Card.Title>
          <Card.Title className="my-3 fw-bold text-muted">{Price}</Card.Title>
          <Button variant="success">Checkout</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
