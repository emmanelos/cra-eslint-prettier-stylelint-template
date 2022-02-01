import './App.scss';
import LayoutContainer from './components/templates/layout/LayoutContainer';
import PortalState from './context/Portal/PortalState';

const App = () => {
	return (
		<PortalState>
			<LayoutContainer />
		</PortalState>
	);
};

export default App;
