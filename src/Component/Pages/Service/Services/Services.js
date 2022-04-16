import React from "react";
import { Row } from "react-bootstrap";
import useService from "../../../../Hooks/useService";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useService();

  return (
    <div className="services_sec container">
      <h1 className="my-5 services_title"> <span>Top Rated</span>  Learning Tutorials</h1>
      <Row xs={1} md={3} lg={3}>
        {services.map((service) => (
          <Service service={service} key={service.Id} />
        ))}
      </Row>
    </div>
  );
};

export default Services;
