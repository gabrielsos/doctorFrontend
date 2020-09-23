import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #1F0322;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Fredoka One', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;