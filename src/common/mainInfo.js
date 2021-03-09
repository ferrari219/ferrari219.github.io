import React from 'react';
import style from './mainInfo.module.scss';
import me from 'img/me.jpg';

const mainInfo = () => {
	return (
		<div className="gridContainer">
			<div className="grid6">
				<div className={style.pic}>
					<img src={me} alt="" />
				</div>
			</div>
			<div className="grid10">
				<h1 className="sr-only">My MainInfo</h1>
				<div className={style.nameWrap}>
					<div className={style.name}>Sung ho Jeon</div>
					<div className={style.job}>Frontend Developer</div>
				</div>
			</div>
		</div>
	);
};

export default mainInfo;
