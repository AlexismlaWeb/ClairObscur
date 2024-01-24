import React from 'react'
import Header from '../components/layouts/Header'
import { Row } from 'react-bootstrap'
import AnimatedItem from '../components/AnimatedItem'

const Home = () => {

    return (
        <div>
            {/* 
            <Row className='d-flex align-items-center justify-content-center'>
                <AnimatedItem image={'vrtist1.svg'} details={'DIOR, Life Is Short'} />
            </Row>
            <Row className='d-flex align-items-center justify-content-center'>
            <AnimatedItem image={'vrtist2.svg'} details={'DIOR, Life Is Short'} />
            </Row>
            <Row className='d-flex align-items-center justify-content-center'>
            <AnimatedItem image={'vrtist3.svg'} details={'DIOR, Life Is Short'} />
            </Row>
            <Row className='d-flex align-items-center justify-content-center'>
            <AnimatedItem image={'vrtist4.svg'} details={'DIOR, Life Is Short'} />
            </Row> */}
            <Header absolute={true}/>
            <AnimatedItem items={['vrtist4.svg','vrtist3.svg','vrtist2.svg','vrtist1.svg']} />
        </div>
    )}

export default Home;
