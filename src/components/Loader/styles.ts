import styled from 'styled-components';

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    transform: rotate(0deg);
    width: 15%;
  }
`;
