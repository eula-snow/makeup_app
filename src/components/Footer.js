import { useState } from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.text>EMAIL: makeup_app@gmail.com</Card.text>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.text>PHONE: 0880500500</Card.text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.text>ADDRESS: 22 Bridge Street, London</Card.text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
