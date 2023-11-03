import styled from "styled-components";
import { pixelToRem } from '../utils/utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${pixelToRem(24, 112, 50)};
  width: 100vw;
  height: 100vh;
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  margin-bottom: ${pixelToRem(70)};
`
export const Logo = styled.div`
  width: ${pixelToRem(201)};
  height: ${pixelToRem(41)};
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: ${pixelToRem(815)};
`
export const Span = styled.span`
  color: var(--sun);
  font: var(--text);
  letter-spacing: 5px;
  text-transform: uppercase;
`
export const Title = styled.h1`
  color: var(--white);
  font: var(--font-display);

  span {
    color: var(--sun);
  }
`
export const Subtitle = styled.p`
  color: var(--gray-05);
  font: var(--heading-3);
  max-width: ${pixelToRem(728)};
  margin-top: ${pixelToRem(24)};
  margin-bottom: ${pixelToRem(32)};

  span {
    color: var(--sun);
  }
`
export const AstronautIllustration = styled.image`
  background: url('./images/home-mars-right.svg') no-repeat;
  position: absolute;
  width: ${pixelToRem(550)};
  height: ${pixelToRem(585)}; 
  top: ${pixelToRem(30)};
  right: ${pixelToRem(-80)};
`

export const Attractions = styled.div`
  display: flex;
  justify-content: space-between;

  width: ${pixelToRem(1000)};

  margin-top: ${pixelToRem(100)};
  `
export const Details = styled.div`
  margin-top: ${pixelToRem(26)};
  
  display: flex;
  align-items: center;
`
export const MarsIlustration = styled.div`
  background: url('./images/mars.svg');
  width: ${pixelToRem(621)};
  height: ${pixelToRem(621)};
`
export const Description = styled.div`
  margin-left: ${pixelToRem(42)};
`