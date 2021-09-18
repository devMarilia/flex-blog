import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerItems, MenuLogo, NavMenu } from "./styles"

const Header = () => {
    return (
        <Container>
            <ContainerItems>
                <MenuLogo>
                    <Link to="/">
                        FlexBlog
                    </Link>
                </MenuLogo>
                <NavMenu>
                    <ul>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/preco">Preço</Link></li>
                        <li><Link to="qualidade">Qualidade</Link></li>
                    </ul>
                </NavMenu>
            </ContainerItems>
        </Container>
    )
}

export default Header
