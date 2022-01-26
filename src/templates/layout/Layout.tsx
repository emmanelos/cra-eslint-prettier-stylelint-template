import React from 'react';
import './Layout.scss';
import Header from '../../organisms/header/Header';
import Pages from '../../pages/Pages';
import Footer from '../../organisms/footer/Footer';

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<Pages />
			<Footer />
		</div>
	);
};

export default Layout;
