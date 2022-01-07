import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const Project = ({ title, result, img, lnk, blk }) => {
	return (
		<dl css={projectStyle} className={blk ? 'black' : ''}>
			<dt>{title}</dt>
			<dd>{result}</dd>
		</dl>
	);
};

Project.defaultProps = {
	title: 'Lorem ipsum',
	result: 'Lorem ipsum',
};

Project.propTypes = {
	title: PropTypes.string,
	result: PropTypes.string,
	img: PropTypes.string,
	lnk: PropTypes.string,
	blk: PropTypes.bool,
};

const projectStyle = css`
	margin: 0;
	padding: 0.5rem 0;
	dt {
		font-size: ${theme.size.base};
		color: ${theme.color.def};
	}
	dd {
		margin: inherit;
		padding: inherit;
		font-size: ${theme.size.sm};
		color: #6c6c6c;
	}
	/* background-color: #fff; */
`;

export default Project;
