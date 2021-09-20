import React from 'react'
import { Link } from 'react-router-dom'

import img1 from "../../assets/images/sobre1.jpg"
import img2 from "../../assets/images/sobre2.jpg"
import { Container } from "./styles"

const Info = () => {
    return (
        <Container>
            <h1>
                Novos valores e <br /> Propriedades CSS
            </h1>

            <div className="sobre-info">
                <div className="sobre">
                    <Link path="/sobre" />
                    <h2>Sobre</h2>
                    <p>O que temos que ter sempre em mente é que a
                        determinação clara de objetivos afeta positivamente
                        a apropriadas objetivos
                    </p>
                    <p>O que temos que ter sempre em mente é que a
                        determinação clara de objetivos afeta positivamente
                        a apropriadas objetivos
                    </p>
                </div>


                <div className="sobre-img">
                    <img src={img1} alt="sobre1" />
                </div>
                <div className="sobre-img">
                    <img src={img2} alt="sobre1" />
                </div>
            </div>
        </Container>
    )
}

export default Info
