import React from 'react';

import { TrafficColor } from '@/objects/TrafficColor';

import LightClassComponent from './LightClassComponent';

import '../../TrafficLights/components/TrafficLightsComponent.style';

interface TrafficLightsClassComponentState {
	trafficColor: TrafficColor;
}

export default class TrafficLightsClassComponent extends React.Component<
	{},
	TrafficLightsClassComponentState
> {
	interval?: NodeJS.Timer;

	currentIndex: number = 0;

	order: TrafficColor[] = [
		TrafficColor.Yellow,
		TrafficColor.Green,
		TrafficColor.Yellow,
		TrafficColor.Red,
	];

	constructor(props: {}) {
		super(props);

		this.state = {
			trafficColor: this.order[this.currentIndex],
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.currentIndex += 1;
			if (this.currentIndex >= this.order.length) {
				this.currentIndex = 0;
			}

			this.setState((state) => ({
				trafficColor: this.order[this.currentIndex],
			}));
		}, 2000);
	}

	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	render(): React.ReactNode {
		return (
			<div className="traffic-lights">
				<LightClassComponent
					color={TrafficColor.Red}
					currentColor={this.state.trafficColor}
				/>
				<LightClassComponent
					color={TrafficColor.Yellow}
					currentColor={this.state.trafficColor}
				/>
				<LightClassComponent
					color={TrafficColor.Green}
					currentColor={this.state.trafficColor}
				/>
			</div>
		);
	}
}
