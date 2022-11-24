import styled, { createGlobalStyle } from 'styled-components';
import * as color from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${color.primaryDarkColor};
    color: ${color.primaryDarkColor};
 }

  button {
    cursor: pointer;
    background-color: ${color.primaryColor};
    color: #FFF;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  /*body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${color.successColor};
  }*/
`;

export const Container = styled.section`
  max-width: 700px;
  margin: 25px auto;
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
