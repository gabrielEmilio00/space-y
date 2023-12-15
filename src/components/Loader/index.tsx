import React from 'react';
import { Loading, Rocket } from './styles';

function Loader() {
	return (
		<Loading>
			<Rocket>
				<img src="./images/rocket-loader.gif" alt="Loading" />
			</Rocket>
		</Loading>
	);
}

export default Loader;
