import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const GWrap = ({ children }) => {
	return (
		<div css={GWrapStyle}>
			{children}
			{/* <Title />
			<Cont contP="test" /> */}
		</div>
	);
};

GWrap.propTypes = {
	children: PropTypes.element,
};

const GWrapStyle = css`
	width: 100%;
	margin: 0;
	padding: 0;
`;

export default GWrap;
