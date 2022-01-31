import { createPortal } from 'react-dom';
import PortalProps from './PortalProps';
import Portal from './Portal';

const ModalContainer = (props: PortalProps): JSX.Element => {
	const { id, handlePortal } = props;

	return createPortal(
		<Portal handlePortal={handlePortal} id={id} />,
		document.body,
	);
};

export default ModalContainer;
