import React from 'react';
import style from './mainInfo.module.scss';
import me from 'img/me.jpg';

const NameJob = ({ myname, job }) => {
	return (
		<div className={style.nameWrap}>
			<div className={style.name}>{myname}</div>
			<div className={style.job}>{job}</div>
		</div>
	);
};

const mainInfo = ({ mainInfo }) => {
	return (
		<div className="gridContainer">
			<div className="grid6">
				<div className={style.pic}>
					<img src={me} alt="" />
				</div>
			</div>
			<div className="grid10">
				<h1 className="sr-only">My MainInfo</h1>
				<NameJob myname={mainInfo.myname} job={mainInfo.job} />
			</div>
		</div>
	);
};

export default mainInfo;
