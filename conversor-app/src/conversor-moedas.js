import './conversor-moedas.css';
import { Jumbotron, Button, Form, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function ConversorMoedas() {
  return (
    <section>
      <h1>Conversor de moedas em ReactJS</h1>
      <Jumbotron>
        <Form>
          <Form.Row>
            <Col sm="3">
              <Form.Control placeholder="0" value={'1'} required />
            </Col>
            <Col sm="3">
              <Form.Control as="select"></Form.Control>
            </Col>
            <Col sm="1" className="text-center" style={{ paddingTop: '5px' }}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm="3">
              <Form.Control as="select"></Form.Control>
            </Col>
            <Col sm="2"></Col>
          </Form.Row>
        </Form>
      </Jumbotron>
    </section>
  );
}

export default ConversorMoedas;
