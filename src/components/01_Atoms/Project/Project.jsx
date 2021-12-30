import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const Project = ({ contP, contDt, contDd }) => {
	return (
		<dl css={projectStyle}>
			<dt></dt>
			<dd></dd>
		</dl>
	);
};

Project.defaultProps = {
	contP: 'Lorem ipsum',
	contDt: 'Lorem ipsum',
	contDd: 'Lorem ipsum',
};

Project.propTypes = {
	contP: PropTypes.string,
	contDt: PropTypes.string,
	contDd: PropTypes.string,
};

const projectStyle = css`
	padding: 4rem 5rem 6rem 7rem;
	font-size: ${theme.size.base};
	color: ${theme.color.def};
`;

export default Project;
