import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'routers/home';
import Detail from 'routers/detail';
import Helmets from 'components/99_Etc/Helmets';

const App = () => {
	return (
		<>
			<Helmets />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Detail />} />
			</Routes>
		</>
	);
};

export default App;
