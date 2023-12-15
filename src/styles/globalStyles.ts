import { createGlobalStyle } from 'styled-components';
import { pixelToRem } from '../utils/utils';

export const GlobalStyles = createGlobalStyle`
:root {
  /* Colors */
  --space: #0b1e8a;
  --space-light: #3d68b2;
  --space-dark: #040327;
  --dark-blue-form: #0e0d40;
  --gray-01: #0d0e13;
  --gray-02: #2c2d3a;
  --gray-03: #60616f;
  --gray-04: #898a93; 
  --gray-05: #d5d5db;
  --mars: #e85937;
  --mars-light: #ff8c70;
  --mars-dark: #cf3f1d;
  --uranus: #24ffe9;
  --sun: #f5d15f;
  --jupiter: #e00e34;
  --earth: #0fdd86;
  --saturn: #554ad7;
  --white: #ffffff;

  /* Fonts */
  --font-display: 800 ${pixelToRem(62)}/${pixelToRem(96)} "Heebo", sans-serif;
  --heading-1: 700 ${pixelToRem(32)}/${pixelToRem(48)} "Heebo", sans-serif;
  --heading-2: 500 ${pixelToRem(24)}/${pixelToRem(32)} "Heebo", sans-serif;
  --heading-3: 400 ${pixelToRem(20)}/${pixelToRem(24)} "Heebo", sans-serif;
  --text-1: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Heebo", sans-serif;
  --text-2: 500 ${pixelToRem(18)}/${pixelToRem(24)} "Heebo", sans-serif;
  --text-3: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Heebo", sans-serif;
  --text-body-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Heebo", sans-serif;
  --text-body-2: 400 ${pixelToRem(12)}/${pixelToRem(24)} "Heebo", sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  @media(max-width: 1440px) {
    /* font-size: 93.75% */
  }
  @media(max-width: 375px) {
    /* font-size: 87.5% */
  }
}

body {
  font-family: "Heebo", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: var(--space-dark);
  overflow-x: hidden;
}

`;
