import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  div {
    position: absolute;
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    z-index: 2;
    animation: spinner 0.8s linear infinite;
  }
`;
