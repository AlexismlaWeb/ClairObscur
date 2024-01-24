import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { Row,Col } from 'react-bootstrap'

const ContactPage = () => {

    return (
        <div>
            <Header/>
            <Row className='mt-5'>
                <h1 className='text-center'>CONTACTEZ NOUS</h1>
            </Row>
            <Row className='d-flex justify-content-center align-items-center mb-5 mt-5'>
                <Col sm={4} class="form-group">
                    <input type="text" className="form-control" id="nom" placeholder='Nom' />
                </Col>
                <Col sm={4}>
                    <input type="text" className="form-control" id="prenom" placeholder='Prénom'/>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col sm={9}>
                    <input type="email" className='form-control' id='email' placeholder='Adresse Email'/>
                </Col>
            </Row>
            <Row className='mt-5 d-flex justify-content-center align-items-center'>
                <Col md={9}>
                    <h3 className=''>VOTRE PROJET</h3>
                </Col>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                <Col md='9'>
                    <textarea className="form-control" id="FormControlTextarea" rows="6"></textarea>
                </Col>
            </Row>
            </Row>
            <div style={{ marginBlockStart : '3%'}}>
            <Footer/>
            </div>
        </div>
    )}

export default ContactPage;
