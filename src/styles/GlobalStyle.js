import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 

:root {
  --white : #ffffff;
  --blue: #2c70ff;
  --gray: #7c7c7c;
}
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px "Nunito", sans-serif;
    color: #222222;
  }

  ul , li {
    text-decoration: none;
    list-style: none;
  }

  a {
    text-align: none;
    text-decoration: none;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }


`;