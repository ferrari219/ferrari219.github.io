import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const GWrap = ({ children }) => {
	return <div css={GWrapStyle}>{children}</div>;
};

GWrap.propTypes = {
	children: PropTypes.node,
};

const GWrapStyle = css`
	width: 100%;
	margin: 0;
	padding: 0;
`;

export default GWrap;
