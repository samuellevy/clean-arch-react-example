import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root, button, input, select, textarea, p {
    font: 14px 'Poppins';
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

`;

export default GlobalStyle;
