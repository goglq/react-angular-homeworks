import React from 'react';
import TrafficLightsClassComponent from './components/TrafficLightsClassComponent';

import Container from '@/features/Container';
import './TrafficLightsClass.style';
import { BackButton } from '@/features/Button';

class HomeworkTrafficLightsClass extends React.Component {
	render() {
		return (
			<div className="traffic-lights-class-page">
				<BackButton>Back</BackButton>
				<Container>
					<TrafficLightsClassComponent />
				</Container>
			</div>
		);
	}
}

export default HomeworkTrafficLightsClass;
