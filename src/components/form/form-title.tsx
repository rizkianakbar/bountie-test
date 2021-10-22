import * as React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

interface IFormTitleProps {}

const FormTitle: React.FunctionComponent<IFormTitleProps> = (props) => {
  const data = ["Mrs", "Ms", "Mdm", "Mr", "Dr"];
  function renderOptions() {
    return data.map((item, index) => {
      return (
        <Label
          check
          key={index}
          style={{
            marginRight: "2rem",
          }}
          className="mb-4"
        >
          <Input
            type="checkbox"
            style={{
              border: "1px solid #FFCB3D",
            }}
          />{" "}
          {item}
        </Label>
      );
    });
  }
  return (
    <>
      <p
        style={{
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Title
      </p>
      {/* checkbox */}
      <FormGroup check>{renderOptions()}</FormGroup>
    </>
  );
};

export default FormTitle;
