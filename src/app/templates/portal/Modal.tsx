import { createPortal } from 'react-dom';
import useModal from '../../hooks/useModal';

interface Props {
	id: string;
	children: React.ReactNode;
}

const Modal = ({ id, children }: Props): JSX.Element => {
	const target = useModal(id);
	return createPortal(children, target);
};

export default Modal;
