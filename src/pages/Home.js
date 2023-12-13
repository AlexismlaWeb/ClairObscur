import React from 'react'
import Header from '../components/layouts/Header'
import { Row } from 'react-bootstrap'

const Home = () => {

    return (
        <div>
            <Header absolute={true}/>
            <Row className='d-flex align-items-center justify-content-center'>
                <img src='vrtist1.svg' alt='dior'/>
                <div style={{position : 'absolute'}}>
                <h2>DIOR</h2>
                <h1>Life Is Short </h1>
                </div>
            </Row>
            <Row className='d-flex align-items-center justify-content-center'>
            <img src='vrtist2.svg' alt='dior'/>
            </Row>
            <Row className='d-flex align-items-center justify-content-center'>
            <img src='vrtist3.svg' alt='dior'/>
            </Row>
            <Row className='d-flex align-items-center justify-content-center'>
            <img src='vrtist4.svg' alt='dior'/>
            </Row>
        </div>
    )}

export default Home;
