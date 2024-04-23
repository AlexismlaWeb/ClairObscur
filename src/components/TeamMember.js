import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const TeamMember = ({ photoPosition, name, description, image }) => {
  return (
    <Row
      className="d-flex justify-content-center align-items-center gx-0"
      style={{ marginBlock: "5%", marginInline: "7%"}}
    >
      {photoPosition === "left" && (
        <Col xs={3} lg={2}>
          {/* Photo à gauche */}
          <img
            src={
              image
            } /* Remplacez "lien_de_la_photo.jpg" par le lien réel de votre photo */
            alt={name}
            style={{ width: "70%" }}
          />
        </Col>
      )}

      <Col
        md={photoPosition === "center" ? 12 : 6}
        xs={
          photoPosition === "center"
            ? 12
            : photoPosition === "left"
            ? { offset: 1, span: 5 }
            : 5
        }
      >
        <h1 className="team-member-name" style={{ fontSize: "4rem"  }}>{name}</h1>
        <p className="team-member-description" style={{ textAlign: "justify", width: "85%" , fontSize: "1.2rem", fontWeight: '100'}}>
          {description}
        </p>
      </Col>

      {photoPosition === "right" && (
        <Col xs={{ offset: 1, span: 3 }} lg={2}>
          {/* Photo à droite */}
          <img
            src={
              image
            } /* Remplacez "lien_de_la_photo.jpg" par le lien réel de votre photo */
            alt={name}
            style={{ width: "70%" }}
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
