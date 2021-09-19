import React, { Fragment } from 'react'

import { Container } from "./styles"

import products1 from "../../assets/images/produtos1.jpg"
import products2 from "../../assets/images/produtos2.jpg"
import products3 from "../../assets/images/produtos3.jpg"

const CardsElements = () => {
    return (
        <Container>
            <h1>Produtos</h1>
            <div className="products-container">
                <div className="products-items purple">
                    <h3>Purple</h3>
                    <img src={products1} alt="products" />
                </div>

                <div className="products-items pink">
                    <h3>Pink</h3>
                    <img src={products2} alt="products" />
                </div>

                <div className="products-items blue">
                    <h3>Blue</h3>
                    <img src={products3} alt="products" />
                </div>

            </div>
        </Container>
    )
}

export default CardsElements
