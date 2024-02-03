import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const TeamMember = ({ photoPosition, name, description, image }) => {
  return (
    <Row
      className="d-flex justify-content-center align-items-center"
      style={{ marginBlock: "5%" }}
    >
      {photoPosition === "left" && (
        <Col xs={3}>
          {/* Photo à gauche */}
          <img
            src={
              image
            } /* Remplacez "lien_de_la_photo.jpg" par le lien réel de votre photo */
            alt={name}
            style={{ width: "100%" }}
          />
        </Col>
      )}

      <Col
        md={photoPosition === "center" ? 12 : 7}
        xs={photoPosition === "center" ? 12 : 8}
      >
        <h1 className="team-member-name">{name}</h1>
        <p className="team-member-description" style={{ textAlign: "justify" }}>
          {description}
        </p>
      </Col>

      {photoPosition === "right" && (
        <Col xs={3}>
          {/* Photo à droite */}
          <img
            src={
              image
            } /* Remplacez "lien_de_la_photo.jpg" par le lien réel de votre photo */
            alt={name}
            style={{ width: "100%" }}
          />
        </Col>
      )}
    </Row>
  );
};

TeamMember.propTypes = {
  photoPosition: PropTypes.oneOf(["left", "right", "center"]),
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

TeamMember.defaultProps = {
  photoPosition: "left", // Par défaut, la photo est à gauche
};

export default TeamMember;
