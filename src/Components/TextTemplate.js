import React from 'react';
import style from './TextTemplate.module.scss';

const TextTemplate = ({ iswhite, title, content }) => {
	return (
		<div className={iswhite && style.iswhite}>
			<h3 className={style.title}>{title}</h3>
			<div className={style.content}>
				{content}
				<ul className={style.gridUl1}>
					<li>
						<span>React</span>
					</li>
				</ul>
				<dl className={style.gridDl1}>
					<dt>Email</dt>
					<dd>grahamsnum@gmail.com</dd>
					<dt>Github</dt>
					<dd>grahamsnum@gmail.com</dd>
				</dl>
				<dl className={style.gridDl2}>
					<dt>2021 - Present</dt>
					<dd>Senior Frontend Developer</dd>
					<dt>2021 - Present</dt>
					<dd>Senior Frontend Developer</dd>
				</dl>
			</div>
		</div>
	);
};

export default TextTemplate;
