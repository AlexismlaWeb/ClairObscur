import React, { useState, useEffect } from "react";
import "../../App.css";
import { Row, Col, Dropdown, Button, DropdownButton } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = ({ absolute }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = useState(location.pathname);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePage(path);
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const MenuStyle = {
    position: absolute === true ? "absolute" : null,
  };

  return (
    <div className="menu-body" style={MenuStyle}>
      <Row className="align-items-center">
        {/* Logo à gauche */}
        <Col xs={4} md={2} onClick={() => handleNavigation("/")}>
          <img
            src="./CO_Blanc_SF.png"
            alt="logo"
            style={{ width: "100%", cursor: "pointer" }}
          />
        </Col>

        {/* Menu à droite */}
        <Col xs={{ offset: 1, span: 7 }} md={{ span: 9, offset: 1 }}>
          {isMobileView ? (
            // Affiche le bouton de menu ou le logo en fonction de la largeur de l'écran
            <div className="d-flex justify-content-end me-3">
              <Dropdown
                show={isMenuOpen}
                onToggle={handleMenuToggle}
                data-bs-theme="dark"
                key={"end"}
                drop="end"
              >
                <Button
                  variant="white"
                  id="dropdown-basic"
                  data-toggle="dropdown"
                >
                  <FaBars
                    size={25}
                    onClick={handleMenuToggle}
                    style={{ cursor: "pointer" }}
                  />
                </Button>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item onClick={() => handleNavigation("/")}>
                    Derniers projets
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleNavigation("/partenaires")}
                  >
                    Nos partenaires
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleNavigation("/notre-equipe")}
                  >
                    Notre équipe
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleNavigation("/contact")}>
                    Contact
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            // Affiche le menu ul au lieu du bouton de menu
            <ul className="nav">
              <li
                className="nav-item"
                onClick={() => handleNavigation("/")}
                style={{ opacity: activePage === "/" ? 1 : 0.5 }}
              >
                Derniers projets
              </li>
              <li
                className="nav-item"
                onClick={() => handleNavigation("/partenaires")}
                style={{ opacity: activePage === "/partenaires" ? 1 : 0.5 }}
              >
                Nos partenaires
              </li>
              <li
                className="nav-item"
                onClick={() => handleNavigation("/notre-equipe")}
                style={{ opacity: activePage === "/notre-equipe" ? 1 : 0.5 }}
              >
                Notre équipe
              </li>
              <li
                className="nav-item"
                onClick={() => handleNavigation("/contact")}
                style={{ opacity: activePage === "/contact" ? 1 : 0.5 }}
              >
                Contact
              </li>
            </ul>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Header;
