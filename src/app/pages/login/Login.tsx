import { Link } from 'react-router-dom';
import Modal from '../../templates/portal/Modal';
function Login() {
	return (
		<section className="login">
			<Link to="/home">Home</Link>

			<Modal id="portal">
				<p>Thinking with portals</p>
			</Modal>
		</section>
	);
}

export default Login;
