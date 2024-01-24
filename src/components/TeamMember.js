import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const TeamMember = ({ photoPosition, name, description, image}) => {
  return (
        <Row className='d-flex justify-content-center align-items-center' style={{ marginBlock : '5%' }}>
          {photoPosition === 'left' && (
            <Col md={2}>
              {/* Photo à gauche */}
              <img
                src={image}  /* Remplacez "lien_de_la_photo.jpg" par le lien réel de votre photo */
                alt={name}
                style={{ width: '100%'}}
              />
            </Col>
          )}

          <Col md={photoPosition === 'center' ? 12 : 7}>
            {/* Nom */}
            <h1 style={{textAlign : photoPosition === 'right' ? 'right' : "left" }}>{name}</h1>
            {/* Description */}
            <p style={{textAlign : photoPosition === 'right' ? 'right' : "left" }}>{description}</p>
          </Col>

          {photoPosition === 'right' && (
            <Col md={2}>
              {/* Photo à droite */}
              <img
                src={image}  /* Remplacez "lien_de_la_photo.jpg" par le lien réel de votre photo */
                alt={name}
                style={{ width: '100%'}}
              />
            </Col>
          )}
        </Row>
  );
};

TeamMember.propTypes = {
  photoPosition: PropTypes.oneOf(['left', 'right', 'center']),
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image : PropTypes.string.isRequired
};

TeamMember.defaultProps = {
  photoPosition: 'left',  // Par défaut, la photo est à gauche
};

export default TeamMember;
