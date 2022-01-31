import { useState } from 'react';
import Login from './Login';

const LoginContainer = () => {
	const [portal, setPortal] = useState(false);

	const handlePortal = () => {
		setPortal(!portal);
	};

	return <Login portal={portal} handlePortal={handlePortal} />;
};

export default LoginContainer;
