import { Link } from 'react-router-dom';
import { LoginProps } from './LoginProps';

export const Login = (props: LoginProps) => {
	const { portal, togglePortal, PortalContainer } = props;

	return (
		<section className="content login">
			<Link to="/home">Home</Link>
			<button onClick={togglePortal}>Open modal</button>

			{portal && <PortalContainer />}
		</section>
	);
};
