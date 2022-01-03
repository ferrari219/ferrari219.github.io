import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { connect } from 'react-redux';
import theme from 'styles/theme';
import { ModeContext } from 'store/mode';

import Top from 'components/03_Organisms/Top';
import Body from 'components/03_Organisms/Body';

const HomePresenter = ({ state }) => {
	const context = useContext(ModeContext);
	return (
		<section css={secStyle} className={context.blk ? 'black' : ''}>
			<Top />
			<Body />
		</section>
	);
};

const secStyle = css`
	width: 100%;
	max-width: 100rem;
	/* height: 90vh; */
	background-color: #fff;
	margin: 5rem auto;
	box-shadow: ${theme.shadow.zero};
	&.black {
		background-color: ${theme.color.dark.bg2};
	}
	@media only screen and (max-width: 768px) {
		margin: 2vw auto;
	}
`;

const mapStateToProps = (state, ownProps) => {
	return { state };
};

export default connect(mapStateToProps)(HomePresenter);
