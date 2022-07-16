import React from 'react';

import Transition from './Transition';

interface FadeTransitionProps {
	children: JSX.Element | JSX.Element[] | string;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({ children }) => {
	return (
		<Transition
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</Transition>
	);
};

export default FadeTransition;
