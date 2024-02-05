import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Row, Col, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Row className="gx-0">
        <h1 className="text-center">CONTACTEZ NOUS</h1>
      </Row>
      <Row className="d-flex justify-content-center align-items-center mb-5 mt-5 gx-0">
        <Col xs={10} sm={8}>
          <input
            type="text"
            className="form-control"
            id="nom"
            placeholder="Nom"
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center mb-5 mt-5 gx-0">
        <Col xs={10} sm={8}>
          <input
            type="text"
            className="form-control"
            id="prenom"
            placeholder="Prénom"
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center gx-0">
        <Col xs={10} sm={8}>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Adresse Email"
          />
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center align-items-center gx-0">
        <Col xs={10} sm={8}>
          <h3 className="">VOTRE PROJET</h3>
        </Col>
        <Row className="mt-4 d-flex justify-content-center align-items-center gx-0">
          <Col xs={10} sm={8}>
            <textarea
              className="form-control"
              id="FormControlTextarea"
              rows="6"
              placeholder="Comment pouvons-nous vous aider ?"
            ></textarea>
          </Col>
        </Row>
      </Row>
      <Row className="mt-5 gx-0">
        <Col className="d-flex justify-content-center align-items-center">
          <Button variant="light">ENVOYER</Button>
        </Col>
      </Row>
      <div style={{ marginBlockStart: "4%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
