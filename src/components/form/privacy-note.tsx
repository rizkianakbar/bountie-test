import * as React from "react";
import { Tooltip, Button, Col, Input, Label } from "reactstrap";

interface IPrivacyNoteProps {}

const PrivacyNote: React.FunctionComponent<IPrivacyNoteProps> = (props) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <>
      <Col
        xs={12}
        md={12}
        className="mt-5"
        style={{
          fontWeight: "normal",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Standard Privacy Note
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum a
          molestiae error fugiat! Nesciunt recusandae at excepturi nihil
          mollitia vel aspernatur! Exercitationem labore itaque explicabo porro
          hic ullam ducimus. Magni?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum a
          molestiae error fugiat! Nesciunt recusandae at excepturi nihil
          mollitia vel aspernatur! Exercitationem labore itaque explicabo porro
          hic ullam ducimus. Magni?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum a
          molestiae error fugiat! Nesciunt recusandae at excepturi nihil
          mollitia vel aspernatur! Exercitationem labore itaque explicabo porro
          hic ullam ducimus. Magni?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum a
          molestiae error fugiat! Nesciunt recusandae at excepturi nihil
          mollitia vel aspernatur! Exercitationem labore itaque explicabo porro
          hic ullam ducimus. Magni?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum a
          molestiae error fugiat! Nesciunt recusandae at excepturi nihil
          mollitia vel aspernatur! Exercitationem labore itaque explicabo porro
          hic ullam ducimus. Magni?
        </p>
        <p className="mb-5">
          I want to receive information or communication from L'OCCITANE.
        </p>
      </Col>
      <Col xs={12} md={4}>
        <div className="switch">
          <span id="TooltipExample" style={{ marginRight: "10px" }}>SMS & Mobile Call</span>
          <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle} style={{
            background: '#FFCB3D',
            color: '#000',
          }}>
            Subscribe to SMS & Mobile Call, Email & Mailing to receive updates about your membership
          </Tooltip>
          <input type="checkbox" id="toggleAll" />
          <label htmlFor="toggleAll"></label>
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className="switch">
          <span style={{ marginRight: "10px" }}>Emailing</span>
          <input type="checkbox" id="toggleAll" />
          <label htmlFor="toggleAll"></label>
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className="switch">
          <span style={{ marginRight: "10px" }}>Mailing</span>
          <input type="checkbox" id="toggleAll" />
          <label htmlFor="toggleAll"></label>
        </div>
      </Col>

      <Col xs={12} md={12} className="mt-5">
        <Label
          check
          style={{
            marginRight: "2rem",
            fontWeight: "normal",
          }}
          className="mb-4"
        >
          <Input
            type="checkbox"
            style={{
              border: "1px solid #FFCB3D",
              marginRight: "1rem",
            }}
          />{" "}
          I have read and understood the above terms and conditions and hereby
          agree that i will bounded by these conditions
        </Label>
      </Col>
      <Col xs={12} md={12} className="mt-5">
        <Button color="primary" style={{
          float: "right",
          backgroundColor: "#FFCB3D",
          color: "#000",
          fontWeight: "bold",
          fontSize: "15px",
          borderRadius: "0",
          border: "none",
          padding: "0.5rem 1rem",
          width: "100%",
        }}>
          CREATE CUSTOMER
        </Button>
      </Col>
      <Col xs={12} md={12}>
      <p
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            marginTop: "1rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          v1.0.7
        </p>
        </Col>
    </>
  );
};

export default PrivacyNote;
