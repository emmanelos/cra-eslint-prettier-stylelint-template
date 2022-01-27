import './Layout.scss';
import HeaderContainer from '../../organisms/header/HeaderContainer';
import Pages from '../../pages/Pages';
import FooterContainer from '../../organisms/footer/FooterContainer';

const Layout = () => {
	return (
		<div className="layout">
			<HeaderContainer />
			<Pages />
			<FooterContainer />
		</div>
	);
};

export default Layout;
