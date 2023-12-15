import styled from 'styled-components';
import { pixelToRem } from '../../utils/utils';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${pixelToRem(25)};

  width: 100%;
`;

export const ArrowLeft = styled.button`
  width: ${pixelToRem(25)};
  height: ${pixelToRem(25)};
  background-image: url('./images/arrow-gallery.svg');
  background-repeat: no-repeat;

  background-color: transparent;
  border: 0;
  outline: none;
`;

export const Image = styled.div`
  width: 100%;
  overflow: hidden;

  .carousel img {
    border-radius: ${pixelToRem(10)};
    pointer-events: none;
    width: ${pixelToRem(345)};
    height: ${pixelToRem(353)};
  }
`;
