import React, { useMemo } from 'react';

import './Light.style';
import { TrafficColor, useTrafficLightsContext } from './TrafficLightsContext';

interface LightProps {
	color: TrafficColor;
}

const Light: React.FC<LightProps> = ({ color }) => {
	const { trafficColor } = useTrafficLightsContext();

	const isActive = useMemo(() => trafficColor === color, [trafficColor]);

	return (
		<div
			className={`light ${color} ${isActive ? 'active' : ''}`}
			style={{ backgroundColor: color }}
		></div>
	);
};

export default Light;
