import React from 'react';

import HomeworkLinkList from '@/features/HomeworkLinkList';

import Container from '@/features/Container';

import './ReelPage.style';

const ReelPage: React.FC = () => {
	return (
		<div className="reel-page">
			<Container>
				<HomeworkLinkList />
			</Container>
		</div>
	);
};

export default ReelPage;
