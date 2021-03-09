import React, { Component } from 'react';
import 'scss/index'; //global scss
import style from './App.module.scss';
import MainInfo from '@/common/mainInfo';
import SubInfo from '@/common/subInfo';
import refer from 'img/refer.jpg'; //삭제 예정

// state = {
// 	mainInfo: {},
// 	subInfo: {

// 	}
// }

class App extends Component {
	render() {
		return (
			<main className={style.container}>
				{/* <div className={style.refer}>
					<img src={refer} alt="refer-image" />
				</div> */}
				<MainInfo />
				<SubInfo />
			</main>
		);
	}
}

export default App;
