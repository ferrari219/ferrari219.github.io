import React from 'react';
import style from './Info.module.scss';
import me from '@/img/me.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Info = () => {
	return (
		<aside>
			<h1 className="sr-only">프로필</h1>
			<div className={style.outer}>
				<section className={style.nameJob}>
					<p className={style.pic}>
						<img src={me} alt="" />
					</p>
					<h3 className="is-h3">Sung ho Jeon</h3>
					<p className={style.badge}>Frontend Developer</p>
					<ul className={style.lnk}>
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

export default Info;
