import styled from 'styled-components';
import { pixelToRem } from '../../utils/utils';

export const DivForm = styled.div`
  height: ${pixelToRem(792)};

  background-color: var(--dark-blue-form);
  padding: ${pixelToRem(39, 51, 61, 52)};
  border-radius: ${pixelToRem(20)};

  .error {
    font: var(--text-3);
    color: var(--jupiter);
    margin-top: ${pixelToRem(4)};
  }
`;
export const Ticket = styled.div`
  width: ${pixelToRem(56)};
  height: ${pixelToRem(56)};

  margin-bottom: ${pixelToRem(16)};
`;
export const Title = styled.h3`
  font: var(--heading-2);
  color: var(--white);

  max-width: ${pixelToRem(256)};
`;
export const Subtitle = styled.p`
  font: var(--text-body-1);
  color: var(--gray-05);

  margin-top: ${pixelToRem(16)};
  margin-bottom: ${pixelToRem(32)};
`;
export const FormGroup = styled.div`
  font: var(--text-body-1);
  display: flex;
  flex-direction: column;

  margin-top: ${pixelToRem(24)};

  label {
    color: var(--white);
    margin-bottom: ${pixelToRem(12)};
  }
  input {
    font: var(--text-2);
    height: ${pixelToRem(48)};
    width: ${pixelToRem(416)};
    padding: ${pixelToRem(10)};

    color: var(--white);
    background-color: transparent;

    border: 1px solid var(--gray-05);
    border-radius: ${pixelToRem(6)};
  }
`;
export const FormCheck = styled.div`
  display: flex;
  align-items: center;
  gap: ${pixelToRem(16)};

  margin-top: ${pixelToRem(24)};

  label {
    font: var(--text-body-1);
    color: var(--gray-05);
  }

  input {
    position: relative;
    cursor: pointer;
    appearance: none;

    &::before {
      content: '';
      display: block;
      border: 2px solid var(--white);
      border-radius: ${pixelToRem(6)};
      width: ${pixelToRem(24)};
      height: ${pixelToRem(24)};
      background-color: transparent;
    }
    &:checked:before {
      content: '';
      display: block;
      width: ${pixelToRem(24)};
      height: ${pixelToRem(24)};
      background-color: var(--mars);
    }
    &:checked:after {
      content: '';
      display: block;
      width: 5px;
      height: 10px;
      border: solid var(--white);
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 6px;
      left: 11px;
    }
  }
`;
export const FormButton = styled.div`
  margin-top: ${pixelToRem(32)};

  width: 100%;
  height: ${pixelToRem(65)};
`;
