import React from 'react';
import style from './TextTemplate.module.scss';

const TextTemplate = ({ iswhite, title, line1, gridul, griddl1, griddl2 }) => {
	return (
		<div className={iswhite && style.iswhite}>
			<h3 className={style.title}>{title}</h3>
			<div className={style.content}>
				{
					//One line Profile
					line1 && <p>{line1}</p>
				}
				{
					//ul direction row
					gridul && (
						<ul className={style.gridUl1}>
							<li>
								<span>{gridul}</span>
							</li>
						</ul>
					)
				}
				{
					// dt, dd direction column
					griddl1 && (
						<dl className={style.gridDl1}>
							<dt>Email</dt>
							<dd>{griddl1.email}</dd>
							<dt>Github</dt>
							<dd>
								<a href={griddl1.github}>{griddl1.github}</a>
							</dd>
							<dt>Homepage</dt>
							<dd>
								<a href={griddl1.homepage}>{griddl1.homepage}</a>
							</dd>
						</dl>
					)
				}
				{
					// dt, dd direction row / dl column
					griddl2 && (
						<dl className={style.gridDl2}>
							<dt>
								<span>{griddl2[0].date}</span>
								<strong>{griddl2[0].company}</strong>
							</dt>
							<dd>
								<strong>{griddl2[0].job}</strong>
								{/* <span>{griddl2[0].project}</span> */}
							</dd>
						</dl>
					)
				}
			</div>
		</div>
	);
};

export default TextTemplate;
