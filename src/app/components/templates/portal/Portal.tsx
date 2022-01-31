import ModalContainer from '../../organisms/modal/ModalContainer';
import PortalProps from './PortalProps';
import './Portal.scss';

const Modal = (props: PortalProps): JSX.Element => {
	const { id, handlePortal } = props;

	return (
		<div id={id} className="portal">
			<div className="portal__background" onClick={handlePortal}></div>
			<ModalContainer />
		</div>
	);
};

export default Modal;
