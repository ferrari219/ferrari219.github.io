import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { topApi, bodyApi } from 'api/api';
class Homecontainer extends Component {
	state = {
		me: null,
		loading: true,
		error: null,
	};
	async componentDidMount() {
		try {
			const { data: me } = await topApi.me();
			this.setState({
				me,
			});
		} catch {
			this.setState({ error: 'Cant find information' });
		} finally {
			this.setState({ loading: false });
		}
	}
	render() {
		const { me, loading, error } = this.state;
		// console.log(me, loading, error);
		return <HomePresenter me={me} loading={loading} error={error} />;
	}
}

export default Homecontainer;
