import React, { useState } from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ absolute }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = useState(location.pathname);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePage(path);
  };

  const MenuStyle = {
    position: absolute === true ? 'absolute' : null,
  };

  return (
    <div className="menu-body" style={MenuStyle}>
      <Row className="align-items-center">
        <Col sm={2} onClick={() => handleNavigation('/')}>
          <img src='./CO_Blanc_SF.png' alt="logo" style={{ width: '100%', cursor: 'pointer' }} />
        </Col>
        <Col md={{ span: 9, offset: 1 }}>
          <ul>
            <li onClick={() => handleNavigation('/')} style={{ opacity: activePage === '/' ? 1 : 0.5 }}>
              Derniers projets
            </li>
            <li
              onClick={() => handleNavigation('/partenaires')}
              style={{ opacity: activePage === '/partenaires' ? 1 : 0.5 }}
            >
              Nos partenaires
            </li>
            <li
              onClick={() => handleNavigation('/notre-equipe')}
              style={{ opacity: activePage === '/notre-equipe' ? 1 : 0.5 }}
            >
              Notre équipe
            </li>
            <li onClick={() => handleNavigation('/contact')} style={{ opacity: activePage === '/' ? 1 : 0.5 }}>
              Contact
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
