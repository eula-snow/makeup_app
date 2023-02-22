import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export const FooterComponent = () => {
  return (
    <Container className="footer-main">
      <Row >
        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>EMAIL: makeup_app@gmail.com</Card.Text>
            </Card.Body>
            <Card.Footer class="card-footer text-muted">
              <i className="fa fa-twitter"></i>
            </Card.Footer>
          </Card>
        </Col>

        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>PHONE: 0880500500</Card.Text>
            </Card.Body>
            <Card.Footer class="card-footer text-muted">
              <i className="fa fa-instagram"></i>
            </Card.Footer>
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>ADDRESS: 22 Bridge Street, London</Card.Text>
            </Card.Body>
            <Card.Footer class="card-footer text-muted">
              <i className="fa fa-facebook"></i>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <div>&copy;2023</div>

    </Container>
  );
};


export default FooterComponent;
