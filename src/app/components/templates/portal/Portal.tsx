import './Portal.scss';
import { PortalProps } from './PortalProps';
import { ModalContainer } from '../../organisms/modal/ModalContainer';

export const Portal = (props: PortalProps): JSX.Element => {
	const { id, togglePortal } = props;

	return (
		<div id={id} className="portal">
			<div className="portal__background" onClick={togglePortal}></div>
			<ModalContainer />
		</div>
	);
};
