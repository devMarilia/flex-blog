import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray-primary);
  padding: 60px calc((100% - 960px ) /2);
  display: flex;
  flex-wrap: wrap;

  .newsletter-info {
    flex: 1 1 240px;
     margin: 0 10px;
  }
  .newsletter-info h1{
    font-size: 3rem;
    color: var(--gray-secundery);
  }
  .newsletter-info p{
    font-size: 1.25rem;
    font-style: italic;
    max-width: 230px;
    color: var(--gray);
    margin-bottom: 10px;
  }
  .newsletter-form {
    flex: 2 1 260px;
    margin: 0 10px;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
  }
  .newsletter-form >  input {
    flex: 3 1 240px;
    font-size: 1.25rem;
    color: var(--gray);
    font-style: italic;
    font-family: "Nunuto", sans-serif;
    border: 4px solid var(--purple);
    background-color: transparent;
    padding: 15px 10px;
    margin: 0px;
    border-radius: 0px;
  }

  .newsletter-form > button {
      flex: 1 1 200px;
      font-family: "Nunuto", sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      background-color: var(--purple);
      color: var(--white);
      cursor: pointer;
      margin: 0;
      padding: 15px 10px;
  }
  @media (max-width: 600px){
    .newsletter-form > button { 
        font-size: 1rem ;
      }
    }
`;
