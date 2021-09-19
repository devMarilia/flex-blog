import styled from 'styled-components';

export const Container = styled.section`
  background: var(--gray-primary);
 
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding: 60px;

  .item-price{
      flex: 1 1 260px;
      border:  4px solid var(--white);
      padding: 20px;
      margin: 10px;
  }

  .item-price h2 {
    font-size: 3rem;
    color: var(--gray);
    text-align: center;
    margin-top: 20px;
  }
  .item-price span {
    max-width: 300px;
    margin: 20px auto;
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 3rem;
    padding: 10px 0 5px 0;
    border-top: 4px solid var(--white);
  }
  .item-price sup {
      font-size: 1.5rem;
  }
  .item-price ul {
      max-width: 300px;
      margin: 20px auto;
      font-size: 1.25rem;

      font-style: italic;
      color: var(--gray)
  }
  .item-price li {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 15px;
  }
  .item-price li::after{
      content: " ";
      display: block;
      width: 6px;
      height: 6px;
      background-color: var(--blue);
      border-radius: 50%;
  }
  a {
    max-width: 300px;
    display: block;
    margin: 20px auto;
    border : 4px solid;
    color: var(--black);
    text-transform: uppercase;
    font-size: 2.25rem;
    padding: 15px 0;
    text-align: center;
  }

  @media (max-width: 800px) {
      padding-left: 10px;
      padding-right: 10px;
  }
`;
