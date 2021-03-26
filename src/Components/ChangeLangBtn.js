import React from 'react';
import style from './ChangeLangBtn.module.scss';

const ChangeLangBtn = ({ lang }) => {
	return (
		<div className={style.switch} tabindex="0">
			<input type="checkbox" name="my_checkbox" value="yes" id="checkbox-id" />
			<label for="checkbox-id">
				<div className={style.area} aria-hidden="true">
					<div className={style.background}>
						<div className={style.handle}></div>
					</div>
				</div>
				<span className={style.langLabel}>{lang}</span>
			</label>
		</div>
	);
};

export default ChangeLangBtn;
