import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import Company from 'components/01_Atoms/Company';
import Project from 'components/01_Atoms/Project';
import PropTypes from 'prop-types';

const ExpList = ({ company, date, job, project }) => {
	return (
		<div css={explistStyle}>
			<div className="left">
				<Company company={company} date={date} />
			</div>
			<div className="right">
				<div className="job">{job}</div>
				<div className="project">
					{project &&
						project.map((item) => (
							<Project key={item.id} {...item} />
						))}
				</div>
			</div>
		</div>
	);
};

ExpList.defaultProps = {
	job: 'Lorem ipsum',
};

ExpList.propTypes = {
	company: PropTypes.string,
	date: PropTypes.string,
	job: PropTypes.string,
	project: PropTypes.array,
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
		& > .job {
			padding: 0.5rem 0;
			font-size: ${theme.size.md};
			color: ${theme.color.main};
		}
		& > .project {
		}
	}
	@media only screen and (max-width: 768px) {
		display: block;
	}
`;

export default ExpList;
