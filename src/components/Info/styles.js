import styled from 'styled-components';

export const Container = styled.section`
    padding: 60px 0;
    max-width: 980px;
    margin: 0 auto;
   

     

    .sobre-info  {
      display: flex;
      flex-wrap: wrap;
      padding: 40px 0;
      margin: 0 auto;
      flex: 2 1 300px;
      margin-top: 4rem;
      border-bottom: 2px solid var(--blue);
      border-top: 2px solid var(--blue);
    
    }

    .sobre {
      display: flex;
      flex: 2 1 300px;
      flex-wrap: wrap;
      padding: 40px 0;
    }


   h1  {
      font-size: 3rem;
      line-height: 1;
      padding: 60px 10px;
      max-width: 980px;
      margin: 0 auto;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: .5rem;
  }
  .sobre-info p {
    font-size: 1.25rem;
    line-height: 1.4rem;

    color: var(--gray);
  }
  img {
    flex: 1 1 160px;
    margin: 0 10px;
  }
`;



