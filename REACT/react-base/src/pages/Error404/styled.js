import styled from 'styled-components';

export const ErrorContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 30px;

  h1,
  p {
    color: #fff;
  }

  h1 {
    font-size: 72px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  p {
    font-size: 18px;
  }
`;
