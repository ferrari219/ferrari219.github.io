import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const ImgCont = ({ cont, blk }) => {
	return (
		<div css={contStyle} className={blk ? 'black' : ''}>
			{cont && (
				<div>
					<div>
						<img src="" alt="react" />
					</div>
					<div>
						<strong>React</strong>
					</div>
					<div>
						<ul>
							<li>ES6 문법에 능숙합니다.</li>
						</ul>
					</div>
				</div>
			)}
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

const contStyle = css`
	width: 100%;
	padding: 4rem 5rem 6rem 7rem;
	font-size: ${theme.size.base};
	/* background-color: #fff; */
	color: ${theme.color.def};
	opacity: 0.98;
	&.black {
		/* background-color: ${theme.color.dark.bg2}; */
		color: #fff;
		dt,
		dd {
			color: inherit;
		}
	}
	p {
		margin: 0;
	}
	dl {
		dt {
			margin: 0;
			padding: 0.2rem 0;
			font-size: ${theme.size.base};
			color: ${theme.color.def};
		}
		dd {
			margin: 0;
			padding: 0.2rem 0;
			font-size: ${theme.size.sm};
			color: #666;
		}
	}
	ul {
		li {
			position: relative;
			padding: 0.3rem 0;
			&::before {
				content: '';
				position: absolute;
				left: -1.5rem;
				top: 1.3rem;
				width: 0.5rem;
				display: block;
				border-top: 0.1rem solid ${theme.color.def};
				opacity: 0.7;
			}
		}
	}
	@media only screen and (max-width: 768px) {
		padding: 2rem 3rem 3rem 3rem;
		p {
			margin: 0;
		}
	}
`;

export default ImgCont;
