import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const ImgContListLi = ({ id, img, name, cont }) => {
	return (
		<div css={imgcontlistliStyle} key={id}>
			<div className="img">
				<img
					src={`${theme.url}/assets/img/skill/${img}.png`}
					alt="react"
				/>
			</div>
			<div className="txt">
				<strong>{name}</strong>
				<ul>
					{cont && cont.map((item) => <li key={item}>{item}</li>)}
				</ul>
			</div>
		</div>
	);
};

ImgContListLi.propTypes = {
	id: PropTypes.number,
	img: PropTypes.string,
	name: PropTypes.string,
	cont: PropTypes.array,
};

const imgcontlistliStyle = css`
	.img {
		overflow: hidden;
		width: 4rem;
		height: 4rem;
		margin: 0.5rem;
		border-radius: 50%;
		img {
			width: 100%;
		}
	}
	.txt {
		display: none;
	}

	@media only screen and (max-width: 768px) {
	}
`;

export default ImgContListLi;
