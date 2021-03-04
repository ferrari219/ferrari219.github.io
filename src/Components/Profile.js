import React from 'react';
import './Profile.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

const Profile = () => {
	return (
		<aside className="box sidebar">
			<h1 className="sr-only">프로필</h1>
			<div className="outer">
				<section className="name-job">
					<p className="pic">
						<img src="https://avatars.githubusercontent.com/u/16126002?s=460&u=64f766ecff0dfc3ccb5990ba1ec6686fb3ffce3b&v=4" alt="" />
					</p>
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
			<div className="inner">
				<List component="nav" aria-label="main mailbox folders">
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary="Drafts" />
					</ListItem>
				</List>
			</div>
		</aside>
	);
};

export default Profile;
