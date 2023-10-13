import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/Affilicates.css";
import axios from "axios";

function Affiliates() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data:", formData);
      const response = await axios.post(
        "http://localhost:4000/contactUs",
        formData
      );

      console.log(response);
    } catch (eror) {
      console.log(eror);
    }
  };

  return (
    <div className="Maincontainer">
      <Container className="AffiliatesContainer">
        <Row className="containerForm ">
          <Col>
            <div className="before-after-text"></div>
            <h2>Contact Us</h2>
            <p>Please fill out the form below to contact us.</p>

            <Form className="FormPAge" onSubmit={handleSubmit}>
              <p>
                Join Friends of Swell AI and receive a 20% commission on all
                payments within the first 12 months for paying customers you
                refer to swellai.com!
              </p>
              <Form.Group className="Group">
                <Form.Label className="LeftAlignedLabel">First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="FormInput"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="Group">
                <Form.Label className="LeftAlignedLabel">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="FormInput"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="Group">
                <Form.Label className="LeftAlignedLabel">
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="FormInput"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Affiliates;
