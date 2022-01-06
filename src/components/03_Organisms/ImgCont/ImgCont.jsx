import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';
import ImgContList from 'components/02_Molecules/ImgContList';

const ImgCont = ({ cont, blk }) => {
	return (
		<div css={imgContStyle} className={blk ? 'black' : ''}>
			{cont &&
				cont.map((item) => <ImgContList key={item.sttl} {...item} />)}
		</div>
	);
};

ImgCont.propTypes = {
	cont: PropTypes.array,
	blk: PropTypes.bool,
};

const imgContStyle = css`
	padding: 2rem 5rem 4rem 7rem;
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
