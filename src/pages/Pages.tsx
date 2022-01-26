import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';

const Pages = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="home" element={<Home />} />
		</Routes>
	);
};

export default Pages;
