import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --soft-red: hsl(14, 88%, 65%);
    --white: #FFF;
    font-size: 12px;
  }
  *,
  *::before,
  *::after{
    box-sizing: border-box;
	  margin: 0;
	  padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
  }
  html {
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    min-width: 320px;
  }
  body {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-height: 800px) and (max-width: 1000px) {
      padding-top: 100px;
    }
  }
`;

export default GlobalStyles;
