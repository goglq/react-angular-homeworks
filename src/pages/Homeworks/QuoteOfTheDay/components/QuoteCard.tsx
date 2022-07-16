import React from 'react';

import './QuoteCard.style';

interface QuoteCardProps {
	quote: [string, string, string];
}

interface QuoteCardState {
	isAnimationOn: boolean;
}

export default class QuoteCard extends React.Component<
	QuoteCardProps,
	QuoteCardState
> {
	constructor(props: QuoteCardProps) {
		super(props);

		this.state = {
			isAnimationOn: false,
		};
	}

	render() {
		return this.props.quote[0] !== '' ? (
			<div className="quote-card">
				<p className="quote-text">{this.props.quote[0]}</p>
				<div className="quote-description">
					<p className="quote-genre">{this.props.quote[2]}</p>
					<p className="quote-author">{this.props.quote[1]}</p>
				</div>
			</div>
		) : null;
	}
}
