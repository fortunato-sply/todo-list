import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-100: #f2f2f2;
    --gray-200: #d9d9d9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1a1a1a;
    --gray-700: #0d0d0d;

    --purple: #8284FA;
    --purple-dark: #5E60CE;

    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;

    --danger: #E25858;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-600);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`