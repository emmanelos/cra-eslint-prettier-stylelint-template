import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Portal } from '../../context/Portal/Portal';
import PortalContext from '../../context/Portal/PortalContext';
import PortalContainer from '../../components/templates/portal/PortalContainer';

const Login = () => {
	const { portal, togglePortal } = useContext<Portal>(PortalContext);

	return (
		<section className="content login">
			<Link to="/home">Home</Link>
			<button onClick={togglePortal}>Open modal</button>

			{portal && <PortalContainer />}
		</section>
	);
};

export default Login;
