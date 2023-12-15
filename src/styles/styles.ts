import styled from 'styled-components';
import { pixelToRem } from '../utils/utils';
import { device } from './responsive';

export const Container = styled.div`
	@media (${device.mobile}) {
		background: url('./images/stars-mobile.png');
	}
	@media (${device.tablet}) {
		background: url('./images/stars-mobile.png');
	}
`;

export const Background = styled.div`
	background: url('./images/Stars.png'),
		linear-gradient(180deg, var(--space-dark) 5%, var(--gray-01) 24.49%);
	overflow: hidden;
	position: absolute;
	width: 100%;
	z-index: -100;
`;
export const Header = styled.header`
	display: flex;
	margin: ${pixelToRem(24, 112, 70)};

	@media (${device.mobile}) {
		margin: ${pixelToRem(24, 0, 70)};
		justify-content: center;
	}
	@media (${device.tablet}) {
		margin: ${pixelToRem(24, 0, 70)};
		justify-content: center;
	}
`;
export const Logo = styled.div`
	width: ${pixelToRem(201)};
	height: ${pixelToRem(41)};
`;
export const Main = styled.main`
	display: flex;
	flex-direction: column;
	max-width: ${pixelToRem(815)};

	margin: ${pixelToRem(24, 112)};

	@media (${device.mobile}) {
		margin: 0;
		align-items: center;
		overflow: hidden;
	}
	@media (${device.tablet}) {
		margin: 0;
		align-items: center;
		overflow: hidden;
	}
`;
export const Span = styled.span`
	color: var(--sun);
	font: var(--text-1);
	letter-spacing: 5px;
	text-transform: uppercase;

	@media (${device.mobile}) {
		font: var(--text-3);
	}
`;
export const EmphasisTitle = styled.h1`
	color: var(--white);
	font: var(--font-display);

	span {
		color: var(--sun);
	}

	@media (${device.mobile}) {
		font: var(--heading-1);
		text-align: center;
		padding: ${pixelToRem(5)};
	}
	@media (${device.tablet}) {
		font: var(--heading-1);
		text-align: center;
		padding: ${pixelToRem(5)};
	}
`;
export const EmphasisSubtitle = styled.p`
	color: var(--gray-05);
	font: var(--heading-3);
	max-width: ${pixelToRem(728)};
	margin-top: ${pixelToRem(24)};
	margin-bottom: ${pixelToRem(32)};

	span {
		color: var(--sun);
	}

	@media (${device.mobile}) {
		font: var(--text-3);
		text-align: center;
		padding: ${pixelToRem(0, 17)};
		opacity: 0.8;
	}
	@media (${device.tablet}) {
		font: var(--text-2);
		text-align: center;
		padding: ${pixelToRem(0, 150)};
		opacity: 0.8;
	}
`;
export const AstronautIllustration = styled.div`
	background: url('./images/home-mars-right.svg') no-repeat;
	position: absolute;
	width: ${pixelToRem(550)};
	height: ${pixelToRem(585)};
	top: ${pixelToRem(30)};
	right: ${pixelToRem(-80)};

	@media (${device.mobile}) {
		position: relative;
		width: ${pixelToRem(390)};
		margin-top: ${pixelToRem(64)};
		right: ${pixelToRem(-20)};
	}
	@media (${device.tablet}) {
		position: relative;
		width: ${pixelToRem(460)};
		margin-top: ${pixelToRem(64)};
		right: ${pixelToRem(-175)};
	}
`;

export const Attractions = styled.div`
	display: flex;
	justify-content: space-between;

	width: ${pixelToRem(1000)};

	margin-top: ${pixelToRem(100)};

	@media (${device.mobile}) {
		flex-direction: column;
		gap: ${pixelToRem(64)};
		width: ${pixelToRem(368)};
		align-items: center;
	}
	@media (${device.tablet}) {
		flex-direction: column;
		gap: ${pixelToRem(64)};
		width: ${pixelToRem(648)};
		align-items: center;
	}
`;
export const Details = styled.div`
	margin-top: ${pixelToRem(26)};
	position: relative;

	display: flex;
	align-items: center;
	padding: ${pixelToRem(24, 80)};

	@media (${device.tablet}) {
		justify-content: center;
	}
`;
export const MarsIlustration = styled.div`
	background: url('./images/mars.svg');
	width: ${pixelToRem(621)};
	height: ${pixelToRem(621)};

	z-index: 10;

	@media (${device.tablet}) {
		display: none;
	}
`;
export const OrbitIllustration = styled.div`
	background: url('./images/lines.svg') no-repeat;
	width: ${pixelToRem(534)};
	height: ${pixelToRem(1163)};

	position: absolute;
	top: ${pixelToRem(34)};
	left: 0;
	z-index: -10;
`;
export const Description = styled.div`
	margin-left: ${pixelToRem(42)};

	@media (${device.tablet}) {
		margin-left: 0;
	}
`;
export const Title = styled.h2`
	color: var(--white);
	font: var(--heading-1);

	width: ${pixelToRem(390)};

	margin-top: ${pixelToRem(14)};

	span {
		color: var(--sun);
	}
`;
export const Subtitle = styled.p`
	color: var(--gray-05);
	font: var(--text-body-1);

	max-width: ${pixelToRem(600)};
	margin-top: ${pixelToRem(26)};
	margin-bottom: ${pixelToRem(24)};

	text-align: justify;
`;
export const GalleryContent = styled.div`
	display: flex;
	align-items: center;

	margin-top: ${pixelToRem(126)};
	margin-left: ${pixelToRem(112)};
	margin-bottom: ${pixelToRem(100)};

	@media (${device.tablet}) {
		margin-left: ${pixelToRem(20)};
	}
`;
export const GalleryText = styled.div`
	display: flex;
	flex-direction: column;

	margin-right: ${pixelToRem(150)};

	@media (${device.tablet}) {
		display: none;
	}
`;
export const TextButton = styled.button`
	font: var(--text-2);
	color: var(--mars-light);

	margin-top: ${pixelToRem(16)};
	width: ${pixelToRem(145)};
	position: relative;
	text-align: left;

	background-color: transparent;
	border: 0;
	outline: none;
	cursor: pointer;

	&::after {
		content: '';
		background-color: var(--mars-light);
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;
export const Gallery = styled.div`
	display: flex;
	align-items: center;
	gap: ${pixelToRem(32)};

	width: 100%;
`;
export const FormSection = styled.div`
	position: relative;
	width: 100%;

	margin-top: ${pixelToRem(100)};
	margin-left: ${pixelToRem(112)};

	padding-top: ${pixelToRem(150)};

	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (${device.tablet}) {
		margin-left: 0;
	}
`;
export const FormContent = styled.div`
	display: flex;
	gap: ${pixelToRem(196)};

	@media (${device.tablet}) {
		gap: 0;
		justify-content: center;
	}
`;
export const RocketIllustration = styled.div`
	background: url('./images/footer-rocket-illustration.svg') no-repeat;
	background-size: 100%;

	width: ${pixelToRem(546)};
	height: ${pixelToRem(981)};

	@media (${device.tablet}) {
		display: none;
	}
`;
export const SmokeIllustration = styled.div`
	background: url('./images/footer-smoke.svg') no-repeat left;

	margin-left: ${pixelToRem(-80)};
	height: ${pixelToRem(280)};

	@media (${device.tablet}) {
		background-position: center;
		margin-top: ${pixelToRem(32)};
	}
`;
export const Footer = styled.footer`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	margin: ${pixelToRem(15, 0, 30)};
`;
export const Social = styled.a`
	margin: ${pixelToRem(0, 10)};

	background-color: transparent;
	text-transform: none;
	outline: none;
	border: none;
	cursor: pointer;
`;
export const Navigation = styled.button`
	font: var(--text-body-1);
	color: var(--white);

	margin: ${pixelToRem(0, 26)};
	background-color: transparent;
	outline: none;
	border: none;
	cursor: pointer;

	@media (${device.tablet}) {
		display: none;
	}
`;
export const Thanks = styled.div`
	color: var(--white);
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: ${pixelToRem(4)};

	span {
		color: var(--jupiter);
		padding: ${pixelToRem(0, 4)};
	}
	a {
		padding: ${pixelToRem(0, 4)};
		text-decoration: none;
		color: var(--white);
	}

	@media (${device.tablet}) {
		display: none;
	}
`;
