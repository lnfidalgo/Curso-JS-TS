import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }
  div + div {
    border-top: 1px solid #ddd;
  }
`;

export const ProfilePicture = styled.div`
  img {
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
  color: red;
`;
