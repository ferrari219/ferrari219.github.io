import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';
import { ModeContext } from 'store/mode';

const Cont = ({ contP, contDt, contDd }) => {
	const context = useContext(ModeContext);
	return (
		<div css={contStyle} className={context.blk ? 'black' : ''}>
			{contP && <p>{contP}</p>}
			{contDt && (
				<dl>
					<dt>{contDt}</dt>
					<dd>{contDd}</dd>
				</dl>
			)}
		</div>
	);
};

// Cont.defaultProps = {
// 	contP: 'Lorem ipsum',
// 	contDt: 'Lorem ipsum',
// 	contDd: 'Lorem ipsum',
// };

Cont.propTypes = {
	contP: PropTypes.string,
	contDt: PropTypes.string,
	contDd: PropTypes.string,
};

const contStyle = css`
	width: 100%;
	font-size: ${theme.size.base};
	/* background-color: #fff; */
	color: ${theme.color.def};
	&.black {
		/* background-color: ${theme.color.dark.bg2}; */
		color: #fff;
		dt,
		dd {
			color: inherit;
		}
	}
	p {
		padding: 4rem 5rem 6rem 7rem;
	}
	dl {
		dt {
			margin: 0;
			padding: 0.2rem 0;
			font-size: ${theme.size.base};
			color: ${theme.color.def};
		}
		dd {
			margin: 0;
			padding: 0.2rem 0;
			font-size: ${theme.size.sm};
			color: #666;
		}
	}
`;

export default Cont;
