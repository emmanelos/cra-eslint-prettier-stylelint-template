import './Layout.scss';
import HeaderContainer from '../../organisms/header/HeaderContainer';
import FooterContainer from '../../organisms/footer/FooterContainer';
import { LayoutProps } from './LayoutContainer';

const Layout = (props: LayoutProps): JSX.Element => {
	const { children } = props;

	return (
		<div className="layout">
			<HeaderContainer />
			{children}
			<FooterContainer />
		</div>
	);
};

export default Layout;
