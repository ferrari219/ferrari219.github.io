import React from 'react';
import style from './subInfo.module.scss';
import TextTemplate from 'comp/TextTemplate';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const subInfo = ({ subInfo }) => {
	return (
		<div className={`gridContainer ${style.subInfo}`}>
			<aside className="grid6">
				<TextTemplate iswhite="iswhite" title="Skills" gridul={subInfo.skills} />
				<TextTemplate iswhite="iswhite" title="Contact" griddl1={subInfo.contact} />
			</aside>
			<div className="grid10">
				<TextTemplate title="I am" line1={subInfo.iam} />
				<TextTemplate title="Experience" griddl2={subInfo.exp} />
			</div>
		</div>
	);
};

export default subInfo;
