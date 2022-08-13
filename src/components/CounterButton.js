import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const CounterButton = (props) => {
  const [isLoading, setLoading] = useState(false);

  const pHandleClick = props.handleClick;

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        pHandleClick();
        setLoading(false);
      });
    }
  }, [isLoading, pHandleClick]);

  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 500));
  };

  return (
    <div className="d-grid gap-2">
      <Button
        variant={props.variant}
        disabled={isLoading}
        onClick={!isLoading ? () => setLoading(true) : null}
      >
        {isLoading ? "Loading.." : props.text}
      </Button>
    </div>
  );
};

export default CounterButton;
