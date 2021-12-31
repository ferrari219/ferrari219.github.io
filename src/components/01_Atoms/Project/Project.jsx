import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';
import { ModeContext } from 'store/mode';

const Project = ({ contDt, contDd }) => {
	const context = useContext(ModeContext);
	return (
		<dl css={projectStyle} className={context.blk ? 'black' : ''}>
			<dt>{contDt}</dt>
			<dd>{contDd}</dd>
		</dl>
	);
};

Project.defaultProps = {
	contDt: 'Lorem ipsum',
	contDd: 'Lorem ipsum',
};

Project.propTypes = {
	contDt: PropTypes.string,
	contDd: PropTypes.string,
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
	background-color: #fff;
`;

export default Project;
