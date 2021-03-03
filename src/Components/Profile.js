import React from 'react';
import './Profile.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Profile = () => {
	return (
		<aside className="box sidebar">
			<h1 className="sr-only">프로필</h1>
			<div className="outer">
				<section className="name-job">
					<h3 className="is-h3">전성호</h3>
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
			<div className="inner">정보</div>
		</aside>
	);
};

export default Profile;
