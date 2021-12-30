import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const ContP = ({ children }) => {
	return <p css={pStyle}>{children}</p>;
};

ContP.defaultProps = {
	children: 'Lorem ipsum',
};

ContP.propTypes = {
	children: PropTypes.string,
};

const pStyle = css`
	padding: 4rem 5rem 6rem 7rem;
	font-size: ${theme.size.base};
	color: ${theme.color.def};
`;

export default ContP;
