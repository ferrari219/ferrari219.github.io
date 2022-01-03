import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const Canvas = ({ children }) => {
	return <section css={secStyle}>{children}</section>;
};

Canvas.propTypes = {
	children: PropTypes.node,
};

const secStyle = css`
	width: 100%;
	max-width: 100rem;
	/* height: 90vh; */
	background-color: #fff;
	margin: 5rem auto;
	box-shadow: ${theme.shadow.deep};
	&.black {
		background-color: ${theme.color.dark.bg2};
	}
	@media only screen and (max-width: 768px) {
		margin: 2vw auto;
	}
`;

export default Canvas;
