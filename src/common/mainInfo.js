import React from 'react';
import style from './mainInfo.module.scss';
import me from 'img/me.jpg';
import ChangeLangBtn from 'comp/ChangeLangBtn';

const NameJob = ({ myname, job, lang, checked, onClick }) => {
	return (
		<div className={style.nameWrap}>
			<div className={style.name}>{myname}</div>
			<div className={style.job}>{job}</div>
			{/* <ChangeLangBtn lang={lang} checked={checked} onClick={onClick} /> */}
		</div>
	);
};

const mainInfo = ({ lang, checked, mainInfo, onClick }) => {
	return (
		<div className="gridContainer">
			<div className="grid6">
				<div className={style.pic}>
					<img src={me} alt="" />
				</div>
			</div>
			<div className="grid10">
				<h1 className="sr-only">My MainInfo</h1>
				<NameJob myname={mainInfo.myname} job={mainInfo.job} lang={lang} checked={checked} onClick={onClick} />
			</div>
		</div>
	);
};

export default mainInfo;
