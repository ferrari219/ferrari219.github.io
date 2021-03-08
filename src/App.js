import React, { Component } from 'react';
import 'scss/index';
import style from './App.module.scss';
import refer from 'img/refer.jpg';
import Info from 'comp/Info';

import me from '@/img/me.jpg';

class App extends Component {
	render() {
		return (
			<main className={style.container}>
				{/* <div className={style.refer}>
					<img src={refer} alt="refer-image" />
				</div> */}
				<div className="grid-container">
					<div className="grid6">
						<Info />
					</div>
					<div className="grid10">{/* <Contents /> */}</div>
				</div>
			</main>
		);
	}
}

export default App;
