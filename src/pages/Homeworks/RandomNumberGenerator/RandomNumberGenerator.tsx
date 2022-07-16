import React, { useState } from 'react';

import Container from '@/features/Container';
import { BackButton, Button } from '@/features/Button';

import './RandomNumberGenerator.style';
import randomIntFromInterval from '@/lib/random';

const HomeworkRandomNumberGenerator: React.FC = () => {
	const [number, setNumber] = useState<number>();
	const [interval, setInterval] = useState<[number, number]>([0, 100]);

	const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setNumber(randomIntFromInterval(interval[0], interval[1]));
	};

	return (
		<div className="number-generator-page">
			<BackButton>Back</BackButton>
			<Container>
				<form
					className="number-generator-form"
					onSubmit={handleGenerate}
				>
					<h1>{number !== undefined ? number : 'Random Number'}</h1>
					<input
						value={interval[0]}
						type="number"
						onChange={(e) =>
							setInterval([parseInt(e.target.value), interval[1]])
						}
					/>
					<input
						value={interval[1]}
						type="number"
						onChange={(e) =>
							setInterval([interval[0], parseInt(e.target.value)])
						}
					/>
					<Button type="submit">Generate</Button>
				</form>
			</Container>
		</div>
	);
};

export default HomeworkRandomNumberGenerator;
