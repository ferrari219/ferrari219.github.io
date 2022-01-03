import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const Company = ({ contDt, contDd, blk }) => {
	return (
		<div css={CompanyStyle} className={blk ? 'black' : ''}>
			<div className="left">left</div>
			<div className="right">right</div>
		</div>
	);
};

Company.defaultProps = {
	contDt: 'Lorem ipsum',
	contDd: 'Lorem ipsum',
};

Company.propTypes = {
	contDt: PropTypes.string,
	contDd: PropTypes.string,
};

const CompanyStyle = css`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0;
	padding: 0;
	background-color: #fff;
	.left {
		flex: 1;
	}
	.right {
		flex: 2;
	}
`;

export default Company;
