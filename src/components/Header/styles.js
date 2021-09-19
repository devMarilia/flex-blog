import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const ContainerItems = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 15 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const MenuLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 10px;

  a {
    color: var(--white);
  }

`;

export const NavMenu = styled.div`


  ul {
      display: flex;
      flex-wrap: wrap;
  }

  a {
      font-size: 1.25rem;
      display: block;
      padding: 10px;
      color: var(--white);
  }
  a:hover{
    color: var(--blue);
  }
`;

