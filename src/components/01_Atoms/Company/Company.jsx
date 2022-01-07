import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const Company = ({ company, date, blk }) => {
	return (
		<div css={CompanyStyle} className={blk ? 'black' : ''}>
			{company}
			{date}
		</div>
	);
};

Company.defaultProps = {
	// contDt: 'Lorem ipsum',
	// contDd: 'Lorem ipsum',
};

Company.propTypes = {
	// contDt: PropTypes.string,
	blk: PropTypes.bool,
};

const CompanyStyle = css`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0;
	padding: 0;
	background-color: #fff;
	& > .left {
		flex: 1;
	}
	& > .right {
		flex: 2;
	}
`;

export default Company;
