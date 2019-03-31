import { createGlobalStyle } from 'styled-components';
// C:\xampp\htdocs\rs-modulo-2\node_modules\font-awesome\css\font-awesome.css
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: 'border-box';
    padding: 0;
    margin: 0;
    outline: 0;
    font-family: sans-serif;
  }

  body {
    background: #9b65e6;
    text-rendering: optimizelegibility !important;
  }
`;

export default GlobalStyle;
