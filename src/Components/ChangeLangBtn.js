import React from 'react';
import style from './ChangeLangBtn.module.scss';

const ChangeLangBtn = ({ lang, checked, onClick }) => {
	return (
		<div className={style.switch}>
			<input type="checkbox" id="checkLang" onClick={onClick} />
			<label for="checkLang">
				<div className={style.toggleBtn}></div>
				<span>{lang}</span>
			</label>
		</div>
	);
};

export default ChangeLangBtn;
