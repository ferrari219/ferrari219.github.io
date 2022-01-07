import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import Company from 'components/01_Atoms/Company';
import Project from 'components/01_Atoms/Project';
import PropTypes from 'prop-types';

const ExpList = ({ company, date, job, project, blk }) => {
	return (
		<div css={explistStyle}>
			<div className="left">
				<Company company={company} date={date} />
			</div>
			<div className="right">
				{job}
				{project &&
					project.map((item) => <Project key={item.id} {...item} />)}
			</div>
		</div>
	);
};

ExpList.defaultProps = {
	// contDt: 'Lorem ipsum',
};

ExpList.propTypes = {
	// contDt: PropTypes.string,
};

const explistStyle = css`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0;
	padding: 0;
	& > .left {
		flex: 1;
	}
	& > .right {
		flex: 2;
	}
	@media only screen and (max-width: 768px) {
		display: block;
	}
`;

export default ExpList;
