import { BackButton, Button } from '@/features/Button';
import React from 'react';

import randomIntFromInterval from '@/lib/random';

import Container from '@/features/Container';

import './QuoteOfTheDay.style';
import Quotes from './Quotes.csv';
import QuoteCard from './components/QuoteCard';

const randomQuoteId = () => randomIntFromInterval(0, Quotes.length - 1);

interface QuoteOfTheDayPageState {
	quote: [string, string, string];
}

class HomeworkQuoteOfTheDay extends React.Component<
	{},
	QuoteOfTheDayPageState
> {
	state: Readonly<QuoteOfTheDayPageState> = {
		quote: ['', '', ''],
	};

	constructor(props: {}) {
		super(props);

		this.state = { quote: ['', '', ''] };

		this.getQuote = this.getQuote.bind(this);
	}

	getQuote() {
		this.setState((state) => ({
			...state,
			quote: Quotes[randomQuoteId()],
		}));
	}

	render() {
		return (
			<div className="quote-of-the-day-page">
				<BackButton>Back</BackButton>
				<Container>
					<QuoteCard quote={this.state.quote} />
					<Button
						className="quote-of-the-day-btn"
						onClick={this.getQuote}
					>
						Quote
					</Button>
				</Container>
			</div>
		);
	}
}

export default HomeworkQuoteOfTheDay;
