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
                        <li><Link to="/">Sobre</Link></li>
                        <li><Link to="/">Produtos</Link></li>
                        <li><Link to="/">Preço</Link></li>
                        <li><Link to="/">Qualidade</Link></li>
                    </ul>
                </NavMenu>
            </ContainerItems>
        </Container>
    )
}

export default Header
