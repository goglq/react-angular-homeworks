import { TrafficColor } from '@/objects/TrafficColor';
import React from 'react';

import '../../TrafficLights/components/Light.style';

interface LightClassComponentProps {
	color: TrafficColor;
	currentColor: TrafficColor;
}

interface LightClassComponentState {
	isActive: boolean;
}

export default class LightClassComponent extends React.Component<
	LightClassComponentProps,
	LightClassComponentState
> {
	constructor(props: LightClassComponentProps) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	render(): React.ReactNode {
		return (
			<div
				className={`light ${this.props.color} ${
					this.props.currentColor === this.props.color ? 'active' : ''
				}`}
				style={{ backgroundColor: this.props.color }}
			></div>
		);
	}
}
