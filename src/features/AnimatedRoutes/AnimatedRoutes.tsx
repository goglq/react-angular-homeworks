import React from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import HomeworkMagicalSphere from '@/pages/HomeworkMagicalSphere';
import HomeworkPrioritizer from '@/pages/HomeworkPrioritizer';
import HomeworkQuoteOfTheDay from '@/pages/HomeworkQuoteOfTheDay';
import HomeworkRandomNumberGenerator from '@/pages/HomeworkRandomNumberGenerator';
import HomeworkTrafficLights from '@/pages/HomeworkTrafficLights';
import HomeworkTrafficLightsClass from '@/pages/HomeworkTrafficLightsClass';
import ReelPage from '@/pages/ReelPage';

import { FadeTransition } from '@/features/Transition';

const AnimatedRoutes: React.FC = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={
						<FadeTransition>
							<Outlet />
						</FadeTransition>
					}
				>
					<Route path="reel" element={<ReelPage />} />
					<Route path="homeworks">
						<Route
							path="prioritizer"
							element={<HomeworkPrioritizer />}
						/>
						<Route
							path="quote-of-the-day"
							element={<HomeworkQuoteOfTheDay />}
						/>
						<Route
							path="magical-sphere"
							element={<HomeworkMagicalSphere />}
						/>
						<Route
							path="number-generator"
							element={<HomeworkRandomNumberGenerator />}
						/>
						<Route
							path="traffic-lights"
							element={<HomeworkTrafficLights />}
						/>
						<Route
							path="traffic-lights-class"
							element={<HomeworkTrafficLightsClass />}
						/>
						<Route index element={<Navigate to="/reel" />} />
					</Route>
					<Route index element={<Navigate to="/reel" />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
