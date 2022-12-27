import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    font-size: 18px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  button:hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
`;
