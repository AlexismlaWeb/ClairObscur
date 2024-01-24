import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import AnimatedItem from '../components/AnimatedItem'

const Home = () => {

    return (
        <div>
            <Header absolute={true}/>
            <AnimatedItem items={['vrtist4.svg','vrtist3.svg','vrtist2.svg','vrtist1.svg']} />
            <Footer/>
        </div>
    )}

export default Home;
