import * as React from "react";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import FormAddress from "./form-address";
import FormContact from "./form-contact";
import FormInfo from "./form-info";
import FormTitle from "./form-title";
import PrivacyNote from "./privacy-note";

interface IFormProps {}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  return (
    <Container style={{ marginTop: "100px" }}>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Create new account
      </p>
      <Container>
        <FormTitle />
        <Row
          style={{
            fontWeight: "bold",
          }}
        >
          <FormInfo />
          <FormAddress />
          <FormContact />
          <PrivacyNote />
        </Row>
      </Container>
    </Container>
  );
};

export default Form;
