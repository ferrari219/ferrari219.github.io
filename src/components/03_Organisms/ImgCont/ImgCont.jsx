import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const ImgCont = ({ cont, blk }) => {
	const url = 'https://ferrari219.github.io/data/assets/img/';
	return (
		<div css={imgContStyle} className={blk ? 'black' : ''}>
			{cont &&
				cont.map((item) => (
					<div key={item.sttl}>
						<h4>{item.sttl}</h4>
						{item.list.map((list) => (
							<div key={list.id}>
								<div>
									<img
										src={`${url}skill/${list.img}.png`}
										alt="react"
									/>
								</div>
								<div>
									<strong>{list.name}</strong>
								</div>
								<div>
									<ul>
										<li>ES6 문법에 능숙합니다.</li>
									</ul>
								</div>
							</div>
						))}
					</div>
				))}
		</div>
	);
};

ImgCont.propTypes = {
	ttl: PropTypes.string,
	contP: PropTypes.string,
	contDt: PropTypes.string,
	contDd: PropTypes.string,
	contLi: PropTypes.array,
};

const imgContStyle = css`
	width: 100%;
	padding: 4rem 5rem 6rem 7rem;
	font-size: ${theme.size.base};
	/* background-color: #fff; */
	color: ${theme.color.def};
	opacity: 0.98;
	&.black {
		/* background-color: ${theme.color.dark.bg2}; */
		color: #fff;
	}

	@media only screen and (max-width: 768px) {
		padding: 2rem 3rem 3rem 3rem;
	}
`;

export default ImgCont;
