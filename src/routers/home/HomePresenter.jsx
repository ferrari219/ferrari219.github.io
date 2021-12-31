import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { connect } from 'react-redux';
import theme from 'styles/theme';
import { ModeContext } from 'store/mode';

import Title from 'components/01_Atoms/Title';
import Cont from 'components/01_Atoms/Cont';

const HomePresenter = ({ state }) => {
	const context = useContext(ModeContext);
	return (
		<section css={secStyle} className={context.blk ? 'black' : ''}>
			<Title />
			<Cont />
		</section>
	);
};

const secStyle = css`
	width: 100%;
	max-width: 100rem;
	height: 90vh;
	background-color: #fff;
	margin: 5rem auto;
	box-shadow: ${theme.shadow.zero};
	&.black {
		background-color: ${theme.color.dark.bg2};
	}
`;

const mapStateToProps = (state, ownProps) => {
	return { state };
};

export default connect(mapStateToProps)(HomePresenter);
