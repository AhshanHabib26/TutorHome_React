import React from "react";
import { Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { Name, Image, Price, Rating, Category, Description } = service;
  const sliceDescription = Description.slice(0, 100)

  return (
    <div className="container gy-4">
      <Card>
        <Card.Img className="service_img" variant="top" src={Image} />
        <Card.Body>
        <div className="service_info d-flex align-items-center justify-content-between">
            <p className="info_title">{Category}</p>
            <p className="text-success fw-bold"><small>{Rating}</small></p>
        </div>
          <Card.Title className="text-secondary mb-2">{Name}</Card.Title>
          <Card.Text className="text-secondary">{sliceDescription}</Card.Text>
          <Card.Title className="my-3 fw-bold text-muted">{Price}</Card.Title>
          <Button as={Link} to='/checkout' variant="success">Checkout</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
