import React from 'react';
import { ButtonComponent } from './styles';

export interface IButton {
	text?: string;
	fullsize?: boolean;
	click?: () => void;
}

function Button({ text, fullsize, click }: IButton) {
	return (
		<ButtonComponent fullsize={fullsize} onClick={click}>
			{text}
		</ButtonComponent>
	);
}

export default Button;
