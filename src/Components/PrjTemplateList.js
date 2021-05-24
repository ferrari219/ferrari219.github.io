import React from 'react';
import style from './PrjTemplateList.module.scss';

//경력기술 - 프로젝트 템플릿
const PrjTemplateList = ({ projects, checked }) => {
	const PrjItem = projects.map((item) => (
		<>
			{checked === true ? (
				<div className={style.projectItem} key={item.title}>
					{item.lnk ? (
						<div className={style.title}>
							<a href={item.lnk} target="_blank">
								{item.title}
							</a>
						</div>
					) : (
						<div className={style.title}>{item.title}</div>
					)}

					{item.detail && <div className={style.detail}>- {item.detail}</div>}
				</div>
			) : (
				<div className={style.projectItem} key={item.titleEn}>
					{item.lnk ? (
						<div className={style.title}>
							<a href={item.lnk} target="_blank">
								{item.titlEn}
							</a>
						</div>
					) : (
						<div className={style.title}>{item.titleEn}</div>
					)}

					{item.detail && <div className={style.detail}>- {item.detailEn}</div>}
				</div>
			)}
		</>
	));
	return PrjItem;
};

export default PrjTemplateList;