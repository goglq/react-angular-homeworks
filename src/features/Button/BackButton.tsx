import React from 'react';
import { useNavigate } from 'react-router-dom';

import './BackButton.style';

interface BackButtonProps {
	children?: JSX.Element | JSX.Element[] | string;
}

const BackButton: React.FC<BackButtonProps> = ({ children }) => {
	const navigate = useNavigate();

	const goBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		navigate(-1);
	};

	return (
		<button className="back-button" onClick={goBack}>
			{children}
		</button>
	);
};

export default BackButton;
