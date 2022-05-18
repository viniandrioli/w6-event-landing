import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, sans-serif;
  }
  html {
    background: var(--secondary);
  }

  :root {
    --primary: #4e7eff;
    --secondary: #fff;
    --button-primary: ##0f35a3;
  }
`;
