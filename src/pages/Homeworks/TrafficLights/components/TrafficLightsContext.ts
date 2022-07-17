import React from 'react';

import { TrafficColor } from '@/objects/TrafficColor';

export interface TrafficLightsContext {
	trafficColor: TrafficColor;
	setTrafficColor: (value: TrafficColor) => void;
}

const defaultValue: TrafficLightsContext = {
	trafficColor: TrafficColor.Yellow,
	setTrafficColor: (_) => {},
};

const TrafficLightsContext = React.createContext(defaultValue);

export const useTrafficLightsContext = () =>
	React.useContext(TrafficLightsContext);

export default TrafficLightsContext;
