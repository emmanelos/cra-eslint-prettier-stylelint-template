import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalContainer from '../../templates/portal/ModalContainer';

const Login = () => {
	const [modal, setModal] = useState(false);

	const handlePortal = () => {
		if (modal) {
			setModal(!modal);
		}
	};

	const handleModal = () => {
		setModal(!modal);
	};

	return (
		<section className="login page">
			<Link to="/home">Home</Link>
			<button onClick={handleModal}>Open modal</button>

			{modal && <ModalContainer modal={modal} id="portal" />}
		</section>
	);
};

export default Login;
