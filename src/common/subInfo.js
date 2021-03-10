import React from 'react';
import style from './subInfo.module.scss';
import TextTemplate from 'comp/TextTemplate';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const subInfo = () => {
	return (
		<div className={`gridContainer ${style.subInfo}`}>
			<aside className="grid6">
				<TextTemplate iswhite="iswhite" title="Skills" content="test" />
				<TextTemplate iswhite="iswhite" title="Contact" content="github" />
			</aside>
			<div className="grid10">
				<TextTemplate title="I am" content="디자인, 개발 모두 다하는 욕심 많은 프론트엔드 개발자 전성호 입니다." />
				<TextTemplate title="Experience" content="test" />
			</div>
		</div>
	);
};

export default subInfo;
