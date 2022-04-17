import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import BlogImage1 from "../../../../Images/Blog_1.png";
import BlogImage2 from "../../../../Images/Blog_2.png";
import BlogImage3 from "../../../../Images/Blog_3.png";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="text-center text-success my-5">Blog Section</h1>
      <Row xs={1} md={3} lg={3}>
        <Col>
          <Card>
            <Card.Img variant="top" src={BlogImage1} />
            <Card.Body>
              <Card.Title>Authorization Vs Authentication</Card.Title>
              <Card.Text>
                Generally, Authentication is the process of verifying who
                someone is. On the other hand, authorization is the process of
                verifying what specific applications, files, and data a user has
                access to.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={BlogImage2} />
            <Card.Body>
              <Card.Title>Why We Use Firebase?</Card.Title>
              <Card.Text>
                The Firebase Realtime Database lets you build rich,
                collaborative applications by allowing secure access to the
                database directly from client-side code. Data is persisted
                locally, and even while offline, realtime events continue to
                fire, giving the end user a responsive experience.
                <br />
                <strong>
                  The list below some common Authentication Methods
                </strong>
                <ListGroup as='ol' numbered>
                  <ListGroup.Item as='li' >Password-based Authentication</ListGroup.Item>
                  <ListGroup.Item as='li'>Multi-factor Authentication</ListGroup.Item>
                  <ListGroup.Item as='li'>Certificate-based Authentication</ListGroup.Item>
                  <ListGroup.Item as='li'>Biometric Authentication</ListGroup.Item>
                  <ListGroup.Item as='li'>Token-based Authentication</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={BlogImage3} />
            <Card.Body>
              <Card.Title>What Other Firebase Alternative?</Card.Title>
              <Card.Text>
                Best Open Source Firebase Alternative:
                <ListGroup as='ol' numbered>
                  <ListGroup.Item as='li' >Parse</ListGroup.Item>
                  <ListGroup.Item as='li'>Back4App</ListGroup.Item>
                  <ListGroup.Item as='li'>AWS Aplify</ListGroup.Item>
                  <ListGroup.Item as='li'>RxDB</ListGroup.Item>
                  <ListGroup.Item as='li'>NativeScript</ListGroup.Item>
                  <ListGroup.Item as='li'>Flutter</ListGroup.Item>
                  <ListGroup.Item as='li'>Kuzzle</ListGroup.Item>
                  <ListGroup.Item as='li'>Prisma GraphQL API</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
