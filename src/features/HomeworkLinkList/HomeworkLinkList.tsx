import React from 'react';

import homeworkLinks from '@/routes/homework-routes';

import HomeworkLinkCard from '@/features/HomeworkLinkCard';

import HomeworkLink from '@/objects/HomeworkLink';

import './HomeworkLinkList.style';

const HomeworkLinkList: React.FC = () => {
	return (
		<div className="homework-link-list">
			{homeworkLinks.map((homeworkLink: HomeworkLink) => (
				<HomeworkLinkCard
					key={homeworkLink.url}
					link={homeworkLink}
					imgSrc={homeworkLink.imgSrc}
				/>
			))}
		</div>
	);
};

export default HomeworkLinkList;
