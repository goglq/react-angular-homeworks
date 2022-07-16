import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@/features/Button';
import Container from '@/features/Container';

import PrioritizerColumnContainer from './components/PrioritizerColumnContainer';

import './HomeworkPrioritizer.style';
import { Button } from '../../features/Button';

const HomeworkPrioritizer: React.FC = () => {
	const navigate = useNavigate();

	const [showModal, setShowModal] = React.useState<boolean>(false);

	const handleRestart = () => {
		setShowModal(false);
		navigate(0);
	};

	return (
		<div className="homework-prioritizer-page">
			<BackButton>Back</BackButton>
			<Container>
				<PrioritizerColumnContainer setShowModal={setShowModal} />
			</Container>
			<div
				className="restart-modal"
				style={{ display: !showModal ? 'none' : undefined }}
			>
				<p>You lost</p>
				<Button onClick={handleRestart}>Restart</Button>
			</div>
		</div>
	);
};

export default HomeworkPrioritizer;
