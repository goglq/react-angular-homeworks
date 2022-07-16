import React from 'react';

import { BackButton } from '@/features/Button';

import './MagicalSpherePage.style';
import Container from '@/features/Container';
import Sphere from './components/Sphere';

const HomeworkMagicalSphere: React.FC = () => {
	const goBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
	};

	return (
		<div className="magical-sphere-page">
			<BackButton>Back</BackButton>
			<Container>
				<Sphere />
			</Container>
		</div>
	);
};

export default HomeworkMagicalSphere;
