import React from 'react';

import { motion } from 'framer-motion';

interface TransitionProps {
	children?: JSX.Element | JSX.Element[] | string;
	initial?: any;
	animate?: any;
	exit?: any;
}

const Transition: React.FC<TransitionProps> = ({
	children,
	initial,
	animate,
	exit,
}) => {
	return (
		<motion.div initial={initial} animate={animate} exit={exit}>
			{children}
		</motion.div>
	);
};

export default Transition;
