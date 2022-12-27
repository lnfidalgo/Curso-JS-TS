import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  input {
    padding: 3px;
    font-size: 18px;
    border: 1px solid #ddd;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;

    &:focus {
      border: 1px solid red;
    }
  }
`;
