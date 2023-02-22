import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export const FooterComponent = () => {
  return (
    <Container>
      <Row className="justify-content-md-between">
        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>EMAIL: makeup_app@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>PHONE: 0880500500</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>ADDRESS: 22 Bridge Street, London</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
