import React from 'react';

import randomIntFromInterval from '../../../lib/random';

import PrioritizerColumnModel from '../object/PrioritizerColumnModel';
import PrioritizerColumn from './PrioritizerColumn';

import './PrioritizerColumnContainer.style';

const randomAmount = () => randomIntFromInterval(10, 300);

const PrioritizerColumnContainer: React.FC<{
	setShowModal: (value: boolean) => void;
}> = ({ setShowModal }) => {
	const [columns, setColumns] = React.useState<PrioritizerColumnModel[]>([
		{ id: 1, amount: randomAmount(), color: 'red' },
		{ id: 2, amount: randomAmount(), color: 'green' },
		{ id: 3, amount: randomAmount(), color: 'blue' },
		{ id: 4, amount: randomAmount(), color: 'cyan' },
		{ id: 5, amount: randomAmount(), color: 'orange' },
	]);

	const [isPlaying, setIsPlaying] = React.useState<boolean>(true);

	React.useEffect(() => {
		if (!isPlaying) {
			setShowModal(true);
		}
	}, [isPlaying]);

	return (
		<div className="prioritizer-column-container">
			<div className="wrapper">
				<div className="dead-line">
					<span className="dead-line__text">dead line</span>
				</div>
				{columns.map((column) => (
					<PrioritizerColumn
						key={column.id}
						column={column}
						setIsPlaying={setIsPlaying}
						isPlaying={isPlaying}
					/>
				))}
			</div>
		</div>
	);
};

export default PrioritizerColumnContainer;
