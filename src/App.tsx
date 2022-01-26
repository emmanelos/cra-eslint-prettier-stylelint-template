import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Grid from './templates/grid/Grid';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
	return (
		<div className="app">
			<Grid>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="home" element={<Home />} />
				</Routes>
			</Grid>
		</div>
	);
}

export default App;
