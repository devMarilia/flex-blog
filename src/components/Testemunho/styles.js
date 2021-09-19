import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;


  .qualidade-item {
    /* 960/3 = 320px */
    flex: 1 1 320px;
    margin: 20px 10px;
  }


  .qualidade-item h2 {
    font-size: 2.25rem;
    color: var(--gray-secundery);
    margin-bottom: 20px;
  }

  .qualidade-item h2::before {
    content: " ";
    display: inline-block;
    height: 30px;
    width: 8px;
    margin-right: 10px;
    background-color: var(--blue);

   
  }

  .qualidade-item:nth-last-of-type(3n+1) h2::before {
    background-color: var(--pink);
  }
  .qualidade-item:nth-last-of-type(3n+2) h2::before {
    background-color: var(--blue-primary);
  }
  .qualidade-item:nth-last-of-type(3n+3) h2::before {
    background-color: var(--purple);
  }
  .qualidade-item p {
      font-size: 1.25rem;
      line-height: 1.4rem;
      color: var(--gray)
  }
  
`;
