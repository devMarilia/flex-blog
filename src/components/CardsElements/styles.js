import styled from 'styled-components';

export const Container = styled.section`
    max-width: 980px;
    margin: 60px auto;

    h1 {
        font-size: 3rem;
        margin: 0 10px 60px  10px;
    }
    
    //div pai products
    .products-container {
        display: flex;
        flex-wrap: wrap;

        //caso queira mudar o posicionamento do card mudar a direção do align-items
        align-items: flex-end;
    }

    .products-items {
        flex: 1 1 175px;

        margin: 10px;
    }

    .products-items h3 {
        font-size: 3rem;
        color: var( --gray-secundery);
        background-color: var( --gray-primary);
        padding: 60px 20px;
    }

    /* cada imagem pode ter um posicionamento diferente para isso só adicionar umas das propriedadaes do align-self */
    .purple {
        border-top: 8px solid var(--purple) ;
    }
    .pink {
        border-top: 8px solid var(--pink) ;
    }
    .blue {
        border-top: 8px solid var(--blue-primary) ;
    }
 
`;


