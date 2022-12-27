import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  a {
    color: blue;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
