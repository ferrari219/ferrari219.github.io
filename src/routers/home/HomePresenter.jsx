import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { connect } from 'react-redux';
import theme from 'styles/theme';

import Title from 'components/01_Atoms/Title';
import Cont from 'components/01_Atoms/Cont';

const HomePresenter = ({ state }) => {
	return (
		<section css={secStyle}>
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
`;

const mapStateToProps = (state, ownProps) => {
	return { state };
};

export default connect(mapStateToProps)(HomePresenter);
