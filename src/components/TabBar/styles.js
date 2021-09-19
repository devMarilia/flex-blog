import styled from 'styled-components';

export const Container = styled.section`
  background-color: #122ab2;
  color: var(--white)
`;

export const ContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 980px;
  margin: 0 auto;
  padding: 10px;

a {
    color: var(--white)  
}

p {
    margin: 0 10px 10px 10px;
}
`;
