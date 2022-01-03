import React from 'react';
import { connect } from 'react-redux';

import Canvas from 'components/02_Molecules/Canvas';
import Top from 'components/03_Organisms/Top';
import Body from 'components/03_Organisms/Body';

const HomePresenter = ({ state }) => {
	return (
		<Canvas>
			<Top />
			<Body />
		</Canvas>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { state };
};

export default connect(mapStateToProps)(HomePresenter);
