import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'routers/home';
import Detail from 'routers/detail';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Detail />} />
			</Routes>
		</div>
	);
};

export default App;
