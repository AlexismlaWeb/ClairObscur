import React, { useState } from "react";
import "../../App.css";
import { Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = useState(location.pathname);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePage(path);
  };

  return (
    <div className="footer-body">
      {/* Première Row pour les logos */}
      <Row className="justify-content-center gx-0">
        <Col xs={2} sm={1} className="center_logo">
          {/* Logo pour Instagram */}
          <FaInstagram size={21} style={{ cursor: "pointer" }} />
        </Col>
        <Col xs={2} sm={1} className="center_logo">
          {/* Logo pour le contact */}
          <FaEnvelope
            size={21}
            onClick={() => navigate("/contact")}
            style={{ cursor: "pointer" }}
          />
        </Col>
      </Row>

      {/* Deuxième Row pour le copyright */}
      <Row className="mt-2 gx-0">
        <Col className="text-center mb-1" style={{ fontSize: "12px" }}>
          Copyright © 2024
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
