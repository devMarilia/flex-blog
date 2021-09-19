import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Info from '../../components/Info'
import Newsletter from '../../components/Newsletter'
import Price from '../../components/Price'

import Topbar from "../../components/TabBar"
import Testemunho from '../../components/Testemunho'
import Products from '../Products'

const Home = () => {
    return (
        <Fragment>
            <Topbar />
            <Header />
            <Info />
            <Products />
            <Price />
            <Testemunho />
            <Newsletter />
            <Footer />
        </Fragment>
    )
}

export default Home
