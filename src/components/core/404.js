import React from "react";
import { Result, Button } from "antd";

const NotFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Page not found"
    extra={
      <Button
        style={{
          backgroundColor: "#00bfa6",
          borderColor: "#00bfa6",
        }}
        type="primary"
        onClick={() => window.location.replace("/")}
      >
        Go Back
      </Button>
    }
  />
);

export default NotFoundPage;
