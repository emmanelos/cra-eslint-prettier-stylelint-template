import { Routes, Route } from 'react-router-dom';
import LoginContainer from './login/LoginContainer';
import HomeContainer from './home/HomeContainer';
import LayoutContainer from '../components/templates/layout/LayoutContainer';

const Pages = () => {
	return (
		<LayoutContainer>
			<Routes>
				<Route path="/" element={<LoginContainer />} />
				<Route path="home" element={<HomeContainer />} />
			</Routes>
		</LayoutContainer>
	);
};

export default Pages;
