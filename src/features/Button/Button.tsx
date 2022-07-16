import React from 'react';

import './Button.style';

interface ButtonProps {
	children?: JSX.Element | JSX.Element[] | string;
	style?: React.CSSProperties;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onAnimationEnd?: (e: React.AnimationEvent<HTMLButtonElement>) => void;
	type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	style,
	onClick,
	onAnimationEnd,
	type,
}) => {
	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			onAnimationEnd={onAnimationEnd}
			style={style}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
