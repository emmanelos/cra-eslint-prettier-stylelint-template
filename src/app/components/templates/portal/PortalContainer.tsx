import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { Portal as Context } from '../../../context/Portal/Portal';
import { PortalContext } from '../../../context/Portal/PortalContext';
import { Portal } from './Portal';

export const PortalContainer = (): JSX.Element => {
	const { id, togglePortal } = useContext<Context>(PortalContext);

	return createPortal(
		<Portal id={id} togglePortal={togglePortal} />,
		document.body,
	);
};
