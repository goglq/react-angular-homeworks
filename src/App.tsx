import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from '@/features/AnimatedRoutes/AnimatedRoutes';

const App: React.FC = () => {
	return (
		<Router>
			<AnimatedRoutes />
		</Router>
	);
};

export default App;
