import React from 'react';
import './Profile.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Profile = () => {
	return (
		<aside className="box sidebar">
			<h1 className="sr-only">프로필</h1>
			<div className="outer">
				<section className="name-job">
					<p className="pic">
						<img src="https://avatars.githubusercontent.com/u/16126002?s=460&u=64f766ecff0dfc3ccb5990ba1ec6686fb3ffce3b&v=4" alt="" />
					</p>
					<h3 className="is-h3">Sung ho Jeon</h3>
					<p className="badge">Frontend Developer</p>
					<ul className="lnk">
						<li>
							<a href="#">
								<LinkedInIcon />
							</a>
						</li>
						<li>
							<a href="#">
								<PinterestIcon />
							</a>
						</li>
					</ul>
				</section>
			</div>
			<div className="inner">
				<ul>
					<li>
						<CalendarTodayIcon />
						<span>1983.2.2</span>
					</li>
					<li>
						<GitHubIcon />
						<span>https://github.com/ferrari219</span>
					</li>
					<li>
						<MailOutlineIcon />
						<span>grahamsnum@gmail.com</span>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Profile;
