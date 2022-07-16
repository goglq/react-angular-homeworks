import React from 'react';
import { Link } from 'react-router-dom';

import HomeworkLink from '@/objects/HomeworkLink';

import './HomeworkLinkCard.style';

interface HomeworkCardProps {
	link: HomeworkLink;
	imgSrc: string;
}

const HomeworkLinkCard: React.FC<HomeworkCardProps> = ({ link, imgSrc }) => {
	return (
		<Link to={link.url}>
			<div className="homework-link-card">
				<img src={imgSrc} />
				<p>{link.caption}</p>
			</div>
		</Link>
	);
};

export default HomeworkLinkCard;
