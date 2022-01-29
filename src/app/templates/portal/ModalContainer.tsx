import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

interface Props {
	id: string;
	modal: boolean;
	setModal?: Dispatch<SetStateAction<boolean>>;
}

const ModalContainer = ({ id, modal, setModal }: Props): JSX.Element => {
	return createPortal(
		<Modal modal={modal} setModal={setModal} id={id} />,
		document.body,
	);
};

export default ModalContainer;
