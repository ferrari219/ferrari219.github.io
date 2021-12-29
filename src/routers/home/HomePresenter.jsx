import React from 'react';
import { connect } from 'react-redux';

const HomePresenter = ({ state }) => {
	return <section>home</section>;
};

const mapStateToProps = (state, ownProps) => {
	return { state };
};

export default connect(mapStateToProps)(HomePresenter);
