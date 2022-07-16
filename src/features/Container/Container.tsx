import React from 'react';

import './Container.style';

interface ContainerProps {
	children: JSX.Element | JSX.Element[] | string;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className="container">{children}</div>;
};

export default Container;
