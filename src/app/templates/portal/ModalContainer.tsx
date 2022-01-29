import { createPortal } from 'react-dom';
import Modal from './Modal';

interface Props {
	id: string;
	modal: boolean;
}

const ModalContainer = ({ id, modal }: Props): JSX.Element => {
	return createPortal(
		<Modal modal={modal} children={undefined} id={id} />,
		document.body,
	);
};

export default ModalContainer;
