import './calculadora.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';

function Calculadora() {
  return (
    <Jumbotron
      style={{
        background: 'transparent !important',
        backgroundColor: '#007bff',
        padding: '5px',
        margin: '5px',
        width: '400px',
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readOnly"
              placeholder="Calculadora em ReactJS"
            ></Form.Control>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
