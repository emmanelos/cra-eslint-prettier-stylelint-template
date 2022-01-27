import { Routes, Route } from 'react-router-dom';
import LoginContainer from './login/LoginContainer';
import HomeContainer from './home/HomeContainer';

const Pages = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginContainer />} />
			<Route path="home" element={<HomeContainer />} />
		</Routes>
	);
};

export default Pages;
