import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

const ShowCounter = () => {
  const { count } = useSelector((state) => state.counter);

  return (
    <Row>
      <Col md={12}>
        <p>
          <b>Counter value is {count}</b>
        </p>
      </Col>
    </Row>
  );
};

export default ShowCounter;
