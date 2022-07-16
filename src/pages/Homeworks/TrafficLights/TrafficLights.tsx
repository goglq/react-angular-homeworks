import React from 'react';

import Container from '@/features/Container';

import { BackButton } from '@/features/Button';

import TrafficLightsComponent from './components/TrafficLightsComponent';

import './TrafficLights.style';

const HomeworkTrafficLights: React.FC = () => {
	return (
		<div className="traffic-lights-page">
			<BackButton>Back</BackButton>
			<Container>
				<TrafficLightsComponent />
			</Container>
		</div>
	);
};

export default HomeworkTrafficLights;
