import { useContext } from 'react';
import './Portal.scss';
import { Portal } from '../../../context/Portal/Portal';
import PortalContext from '../../../context/Portal/PortalContext';
import ModalContainer from '../../organisms/modal/ModalContainer';

const Modal = (): JSX.Element => {
	const { id, togglePortal } = useContext<Portal>(PortalContext);

	return (
		<div id={id} className="portal">
			<div className="portal__background" onClick={togglePortal}></div>
			<ModalContainer />
		</div>
	);
};

export default Modal;
