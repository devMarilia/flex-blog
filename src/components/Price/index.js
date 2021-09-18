import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from "./styles"

const Price = () => {
    return (
        <Container id="preco">
            <div className="item-price">
                <h2>Cobre</h2>
                <span><sup>R$</sup>19</span>
                <ul>
                    <li>Planos ilimitatos</li>
                    <li>Acesso Restrito</li>
                    <li>Conteúdo Secreto</li>
                    <li>Suporte 24hrs</li>
                </ul>
                <Link to="/">Comprar</Link>
            </div>

            <div className="item-price">
                <h2>Prata</h2>
                <span><sup>R$</sup>39</span>
                <ul>
                    <li>Planos ilimitatos</li>
                    <li>Acesso Restrito</li>
                    <li>Conteúdo Secreto</li>
                    <li>Suporte 24hrs</li>
                    <li>Compra exclusiva</li>
                </ul>
                <Link to="/">Comprar</Link>
            </div>

            <div className="item-price">
                <h2>Ouro</h2>
                <span><sup>R$</sup>79</span>
                <ul>
                    <li>Planos ilimitatos</li>
                    <li>Acesso Restrito</li>
                    <li>Conteúdo Secreto</li>
                    <li>Suporte 24hrs</li>
                    <li>Compra exclusiva</li>
                    <li>Dowload dos itens</li>
                </ul>
                <Link to="/">Comprar</Link>
            </div>
        </Container>
    )
}

export default Price
