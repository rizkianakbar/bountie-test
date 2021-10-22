import * as React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

interface IFormContactProps {}

const FormContact: React.FunctionComponent<IFormContactProps> = (props) => {
  const year = new Date().getFullYear();
  
  const renderDayOptions = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return days;
  };

  const renderMonthOptions = () => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return months;
  };

  const renderYearOptions = () => {
    const years = [];
    for (let i = year; i >= 1900; i--) {
      years.push(i);
    }
    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };


  return (
    <>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Contact
      </p>
      <Col xs={12} md={6} className="mb-4">
        <Label>Address</Label>
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
        <Input type="text" placeholder="Address" />
      </Col>
      <Col xs={12} md={2} className="mb-4">
        <Label>Date of birth</Label>
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
        {/* only date */}
        <Input type="select" placeholder="Date of birth">
          {renderDayOptions()}
        </Input>
      </Col>
      <Col xs={12} md={2} className="mb-4">
        <Label>Month</Label>
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
        <Input type="select" placeholder="Month">
          {renderMonthOptions()}
        </Input>
      </Col>
      <Col xs={12} md={2} className="mb-4">
        <Label>Year</Label>
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
        {/* input only year */}
        <Input type="select" placeholder="Year">
          {renderYearOptions()}
        </Input>
      </Col>
    </>
  );
};

export default FormContact;
