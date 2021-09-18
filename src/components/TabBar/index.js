import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerItems } from "./styles"

const TabBar = () => {
    return (
        <Container>
            <ContainerItems>
                <p>Seg / Sex -08:00 às 18:00</p>
                <Link to="tel: +55 11 99999-9999">
                    +55 11 99999-9999
                </Link>
            </ContainerItems>
        </Container>
    )
}

export default TabBar
