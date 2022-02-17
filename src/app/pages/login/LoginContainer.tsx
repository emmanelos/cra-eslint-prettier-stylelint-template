import { useContext } from 'react';
import { Portal as Context } from '../../context/Portal/Portal';
import { PortalContext } from '../../context/Portal/PortalContext';
import { PortalContainer } from '../../components/templates/portal/PortalContainer';
import { Login } from './Login';

const LoginContainer = () => {
	const { portal, togglePortal } = useContext<Context>(PortalContext);

	return (
		<Login
			portal={portal}
			togglePortal={togglePortal}
			PortalContainer={PortalContainer}
		/>
	);
};

export default LoginContainer;
