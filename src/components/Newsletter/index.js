import React from 'react'

import { Container } from "./styles"

const Newsletter = () => {
    return (
        <Container>
            <div className="newsletter-info">
                <h1>Newsletter</h1>
                <p>Assine e fique por dentro das novidades</p>
            </div>

            <form>
                <input type="text" placeholder="digite seu email" />
                <button type="submit">Assinar</button>
            </form>
        </Container>
    )
}

export default Newsletter
