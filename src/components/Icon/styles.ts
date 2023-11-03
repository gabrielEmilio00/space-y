import styled from "styled-components";
import { pixelToRem } from "../../utils/utils";

export const DivIcon = styled.div`
  width: ${pixelToRem(216)};
  height: ${pixelToRem(113)};

  display: flex;
  flex-direction: column;
  justify-content: start;

`

export const Image = styled.div`
  margin-bottom: ${pixelToRem(8)};
`

export const Text = styled.div`
  color: var(--gray-05);
  font: var(--text-body-1);
`