import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    height: 180px;
    width: 180px;
    border: 4px solid #ddd;
    border-radius: 50%;
    cursor: pointer;
    margin: 20px auto;
    overflow: hidden;
  }

  img {
    height: 180px;
    width: 180px;
  }

  input {
    display: none;
  }
`;
