import React from 'react';

import './Button.style';

interface ButtonProps {
	children?: JSX.Element | JSX.Element[] | string;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className="button" onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
