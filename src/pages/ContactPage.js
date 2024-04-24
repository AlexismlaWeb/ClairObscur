import React, { useRef }  from "react";
import emailjs from 'emailjs-com';
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Row, Col, Button } from "react-bootstrap";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message envoyé !');
      }, (error) => {
        console.log(error.text);
        alert('Erreur lors de l\'envoi du message.');
      });
  };

  return (
    <div>
      <Header />
      <div style={{ marginBlock: '4%' }}>
      <Row className="gx-0">
        <h1 className="text-center">CONTACTEZ NOUS</h1>
      </Row>
      <form ref={form}>
      <Row className="d-flex justify-content-center align-items-center mb-5 mt-5 gx-0">
        <Col xs={10} sm={8}>
          <input
            type="text"
            className="form-control"
            id="nom"
            placeholder="Nom"
            name= "nom"
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
            name= "prénom"
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
            name= "email"
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
              name= "message"
            ></textarea>
          </Col>
        </Row>
      </Row>
      <Row className="mt-5 gx-0">
        <Col className="d-flex justify-content-center align-items-center">
          <Button variant="light" onClick={() => sendEmail()}>ENVOYER</Button>
        </Col>
      </Row>
      </form>
      </div>
      <div style={{ marginBlockStart: "4%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
