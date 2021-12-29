import React from 'react';
import { connect } from 'react-redux';

const HomePresenter = ({ state }) => {
	console.log(state);
	return <div>HomePresenter</div>;
};

const mapStateToProps = (state, ownProps) => {
	return { state };
};

export default connect(mapStateToProps)(HomePresenter);
