import React from 'react';

const HomeworkMagicalSphere: React.FC = () => {
	const goBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
	};

	return (
		<>
			<button onClick={goBack}>back</button>
		</>
	);
};

export default HomeworkMagicalSphere;
