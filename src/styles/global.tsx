import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   font-size: 0.875rem;
   padding: 0;
   font-family: 'Roboto', sans-serif;
   line-height: 1.2;
   box-sizing: border-box;
 }
 
 html, body, div, p, header, footer, main, section, nav, ul, li, a, button, input, img, article, h1, h2, h3, h4, h5, h6 {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   list-style-type: none;
   text-decoration: none;
   border: none;
}
 
 :root {
   --text-color: #2d2d2d;
   --text-color-secondary: #FFFFFF;
   --blue: #4362E9;
   --green: #61CBAA;
   --dark-blue: #1D1C4E
}
 
 body {
  background: #fbfbfb;
 }
 
 html {
   -webkit-font-smoothing: antialiased;
   -webkit-tap-highlight-color: transparent;
   scroll-behavior: smooth;
 }
 
 p {
   line-height: 1.4;
 }

 button{
  cursor: pointer;
 }
`;
