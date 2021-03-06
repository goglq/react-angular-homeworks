import randomIntFromInterval from '@/lib/random';
import React, { useEffect } from 'react';

import './Sphere.style';

import Answers from '../data/answers.json';

const randomAnswerIndex = () => randomIntFromInterval(0, Answers.length - 1);

const MagicalSphere: React.FC = () => {
	const [answer, setAnswer] = React.useState<string>();
	const [isAnswering, setIsAnswering] = React.useState<boolean>(false);

	const handleClick = () => {
		if (isAnswering) return;
		setIsAnswering(true);
		setAnswer(Answers[randomAnswerIndex()]);
	};

	return (
		<>
			<div
				onClick={handleClick}
				className={`magical-sphere ${isAnswering ? 'disabled' : ''}`}
			>
				<div className="display">
					<span
						className={isAnswering ? 'answering-anim' : ''}
						onAnimationEnd={(e) => {
							setIsAnswering(false);
							setAnswer(undefined);
						}}
					>
						{answer && isAnswering && answer}
					</span>
				</div>
				<h2 className={`hint ${isAnswering ? 'asking' : ''}`}>
					Click to Ask
				</h2>
			</div>
		</>
	);
};

export default MagicalSphere;
