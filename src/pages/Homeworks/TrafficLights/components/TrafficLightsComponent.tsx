import React from 'react';

import Light from './Light';
import TrafficLightsContext from './TrafficLightsContext';
import { TrafficColor } from '@/objects/TrafficColor';

import './TrafficLightsComponent.style';

const lightOrder = [
	TrafficColor.Yellow,
	TrafficColor.Green,
	TrafficColor.Yellow,
	TrafficColor.Red,
];

const TrafficLightsComponent: React.FC = () => {
	let currentIndex = 0;

	const [trafficColor, setTrafficColor] = React.useState<TrafficColor>(
		lightOrder[currentIndex]
	);

	const changeColor = () => {
		currentIndex += 1;
		if (currentIndex >= lightOrder.length) {
			currentIndex = 0;
		}
		setTrafficColor(lightOrder[currentIndex]);
	};

	React.useEffect(() => {
		const interval = setInterval(() => changeColor(), 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<TrafficLightsContext.Provider
			value={{ trafficColor, setTrafficColor }}
		>
			<div className="traffic-lights">
				<Light color={TrafficColor.Red} />
				<Light color={TrafficColor.Yellow} />
				<Light color={TrafficColor.Green} />
			</div>
		</TrafficLightsContext.Provider>
	);
};

export default TrafficLightsComponent;
