import styled from 'styled-components';
import { IButton } from '.';
import { pixelToRem } from '../../utils/utils';

export const ButtonComponent = styled.button<IButton>`
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;

	width: ${({ fullsize }) => (fullsize ? '100%' : pixelToRem(264))};
	height: ${({ fullsize }) => (fullsize ? '100%' : pixelToRem(52))};
	border: 0;
	border-radius: 6px;

	background-color: var(--mars);
	color: var(--white);
	font-size: ${pixelToRem(18)};
	font-weight: 700;

	box-shadow: ${pixelToRem(6)} ${pixelToRem(5)} var(--mars-light);
	transition: all 100ms ease-in-out;

	&:active {
		background-color: var(--mars-dark);
		box-shadow: 0 0 transparent;
		transform: translate(6px, 5px);
		transition: all 100ms ease-in-out;
	}
`;
