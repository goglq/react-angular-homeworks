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
	const [currentIndex, setCurrentIndex] = React.useState<number>(0);

	const [trafficColor, setTrafficColor] = React.useState<TrafficColor>(
		lightOrder[currentIndex]
	);

	const changeColor = () => {
		setCurrentIndex(currentIndex + 1);
		if (currentIndex >= lightOrder.length - 1) {
			console.log(currentIndex);
			setCurrentIndex(0);
		}
		setTrafficColor(lightOrder[currentIndex]);
	};

	React.useEffect(() => {
		const timeout = setTimeout(changeColor, 1000);
		return () => clearTimeout(timeout);
	}, [trafficColor, currentIndex]);

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
