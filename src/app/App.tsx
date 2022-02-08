import './App.scss';
import PortalState from './context/Portal/PortalState';
import Pages from './pages/Pages';

const App = () => {
	return (
		<PortalState>
			<Pages />
		</PortalState>
	);
};

export default App;
