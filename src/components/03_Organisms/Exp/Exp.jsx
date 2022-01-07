import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';
import ExpList from 'components/02_Molecules/ExpList';

const Exp = ({ cont, blk }) => {
	// console.log(cont && cont);
	return (
		<div css={expStyle} className={blk ? 'black' : ''}>
			{cont && cont.map((item) => <ExpList key={item.id} {...item} />)}
		</div>
	);
};

Exp.defaultProps = {
	// contDt: 'Lorem ipsum',
};

Exp.propTypes = {
	cont: PropTypes.array,
};

const expStyle = css`
	margin: 0;
	padding: 4rem 5rem 6rem 7rem;
	color: ${theme.color.def};
	opacity: 0.98;
	font-size: ${theme.size.base};
	&.black {
		/* background-color: ${theme.color.dark.bg2}; */
		color: #fff;
	}
	@media only screen and (max-width: 768px) {
		padding: 2rem 3rem 3rem 3rem;
	}
`;

export default Exp;
