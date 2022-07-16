import React from 'react';

import PrioritizerColumnModel from '../object/PrioritizerColumnModel';

import './PrioritizerColumn.style';

interface PrioritizerColumnProps {
	column: PrioritizerColumnModel;
	setIsPlaying: (value: boolean) => void;
	isPlaying: boolean;
}

const PrioritizerColumn: React.FC<PrioritizerColumnProps> = ({
	column,
	isPlaying,
	setIsPlaying,
}) => {
	const [amount, setAmount] = React.useState(column.amount);
	const am = React.useMemo(() => amount, [amount]);

	React.useEffect(() => {
		if (!isPlaying) return;

		const timeout = setTimeout(() => {
			if (amount >= 800) {
				setIsPlaying(false);
				return;
			}
			setAmount(am + 1);
		}, 20);

		return () => clearTimeout(timeout);
	});

	const handleClick = () => {
		setAmount(Math.floor(amount / 2));
	};

	return (
		<div
			className="prioritizer-column"
			onClick={handleClick}
			style={{
				height: am,
				backgroundColor: column.color,
			}}
		>
			<span
				style={{
					position: 'absolute',
					left: '50%',
					bottom: 10,
					transform: 'translateX(-50%)',
					fontSize: '3rem',
					fontWeight: 'bold',
					color: 'white',
				}}
			>
				{am}
			</span>
		</div>
	);
};

export default PrioritizerColumn;
