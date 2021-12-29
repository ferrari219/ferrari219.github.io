import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'routers/home';
import Detail from 'routers/detail';
import Helmets from 'components/99_Etc/Helmets';
import Globals from 'styles/Globals';

const App = () => {
	return (
		<>
			<Helmets />
			<Globals />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Detail />} />
			</Routes>
		</>
	);
};

export default App;
