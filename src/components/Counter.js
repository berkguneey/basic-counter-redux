import React, { useState } from "react";
import { ShowCounter, CounterButton } from "./";
import { increaseCounterHandle, decreaseCounterHandle } from "../utils";
import { Container, Row, Col, Form } from "react-bootstrap";

const Counter = () => {
  const [value, setValue] = useState(1);

  const increaseCounter = () => {
    increaseCounterHandle(value);
  };

  const decreaseCounter = () => {
    decreaseCounterHandle(value);
  };

  const handleChange = (e) => {
    if (Number.isInteger(Number(e.target.value))) {
      setValue(e.target.value);
    }
  };

  return (
    <Container>
      <div className="mt-5">
        <ShowCounter />
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                value={value}
                placeholder="Enter value"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <CounterButton
              handleClick={increaseCounter}
              text={`Increase (+${value})`}
              variant="success"
            />
          </Col>
          <Col md={2}>
            <CounterButton
              handleClick={decreaseCounter}
              text={`Decrease (-${value})`}
              variant="danger"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Counter;
