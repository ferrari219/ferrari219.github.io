import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import '@/styles/styleIndex';
import './App.scss';
import Profile from '@/Components/Profile';
import Contents from '@/Components/Contents';
class App extends Component {
	render() {
		return (
			<div className="bg">
				<Container maxWidth="lg" className="container">
					{/* xs, sm, md, lg, xl, false */}
					<Grid container spacing={4}>
						<Grid item xs={3}>
							<Profile />
						</Grid>
						<Grid item xs={9}>
							<Contents />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default App;
