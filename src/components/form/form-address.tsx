import axios from "axios";
import * as React from "react";
import { Col, Input, Label } from "reactstrap";

interface IFormAddressProps {}

const FormAddress: React.FunctionComponent<IFormAddressProps> = (props) => {
  // call the option from api using axios
  // url : https://restcountries.com/v2/all

  const [country, setCountry] = React.useState("");

  const url = "https://restcountries.com/v2/all";

  // call axios typescript
  const getCountryName = async () => {
    const response: any = await axios.get(url);
    const countryName = response.data.map((item: any) => {
      return item.name;
    });
    setCountry(countryName);
  };

  React.useEffect(() => {
    getCountryName();
  }, []);

  const haha: any = country;
  const renderCountryName = () => {
    if (haha instanceof Array) {
      return haha.map((item: any, index: number) => {
        return <option key={index}>{item}</option>;
      });
    }
  };

  return (
    <>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Address
      </p>
      <Col xs={12} md={12} className="mb-4">
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

      <Col xs={12} md={6} className="mb-4">
        <Label>Country/Location</Label>
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
        <Input type="select" placeholder="Last name">
          {renderCountryName()}
        </Input>
      </Col>
      <Col xs={12} md={6}>
        <Label>Province/District</Label>
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
    </>
  );
};

export default FormAddress;
