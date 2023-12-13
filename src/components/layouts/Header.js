import React from 'react'
import '../../App.css'
import {Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Header = ({absolute}) => {  
    const navigate = useNavigate();
    const MenuStyle = {
        position : absolute === true ? 'absolute' : null
    }

    return (
        <div className='menu-body' style={MenuStyle}>
            <Row className="align-items-center">
            <Col md={2} onClick={() => navigate("/")}>
                <img src='CO_BLANC_SF.png' alt='logo' style={{width : '100%', cursor : 'pointer'}}/>
            </Col>
                <Col md={{span : 8 , offset : 1}}>
                    <ul>
                        <li onClick={() => navigate("/")}>Derniers projets</li>
                        <li onClick={() => navigate("/partenaires")}>Nos partenaires</li>
                        <li onClick={() => navigate("/notre-equipe")}>Notre équipe</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
  }

export default Header;