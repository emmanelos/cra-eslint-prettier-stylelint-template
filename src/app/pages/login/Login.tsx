import { Link } from 'react-router-dom';
import LoginProps from './LoginProps';
import PortalContainer from '../../components/templates/portal/PortalContainer';

const Login = (props: LoginProps) => {
	const { portal, handlePortal } = props;

	return (
		<section className="login page">
			<Link to="/home">Home</Link>
			<button onClick={handlePortal}>Open modal</button>

			{portal && <PortalContainer id="portal" handlePortal={handlePortal} />}
		</section>
	);
};

export default Login;
