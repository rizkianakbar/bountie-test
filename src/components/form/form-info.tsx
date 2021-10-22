import * as React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

interface IFormInfoProps {}

const FormInfo: React.FunctionComponent<IFormInfoProps> = (props) => {
  return (
    <>
      <Col xs={12} md={6} className="mb-4">
        <Label>Last Name</Label>
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {" "}
          *
        </span>
        <Input type="text" placeholder="Last name" />
      </Col>
      <Col xs={12} md={6} className="mb-4">
        <Label>First Name</Label>
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {" "}
          *
        </span>
        <Input type="text" placeholder="First name" />
      </Col>

      <Col xs={12} md={6} className="mb-4">
        <Label>Mobile phone number</Label>
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {" "}
          *
        </span>
        <Input type="text" placeholder="Mobile phone number" />
      </Col>
      <Col xs={12} md={6}></Col>
    </>
  );
};

export default FormInfo;
