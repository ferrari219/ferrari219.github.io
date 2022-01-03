import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const Title = ({ ttl, blk }) => {
	return (
		<h3 css={h3Style} className={blk ? 'black' : ''}>
			{ttl}
		</h3>
	);
};

Title.defaultProps = {
	ttl: 'Lorem ipsum',
	blk: false,
};

Title.propTypes = {
	ttl: PropTypes.string,
	blk: PropTypes.bool,
};

const h3Style = css`
	position: relative;
	width: 100%;
	margin: 0;
	padding: 0 2rem 0 7rem;
	font-size: ${theme.size.xlg};
	background-color: ${theme.color.light.bg};
	color: ${theme.color.def};
	&.black {
		background-color: ${theme.color.dark.bg};
		color: #fff;
	}
	&::before {
		position: absolute;
		left: 0;
		top: 0;
		content: '';
		width: 1.5rem;
		height: 100%;
		background-color: ${theme.color.main};
	}
	@media only screen and (max-width: 768px) {
		padding: 0 3rem;
		font-size: ${theme.size.lg};
	}
`;

export default Title;
