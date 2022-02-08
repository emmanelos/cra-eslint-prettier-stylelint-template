import { createPortal } from 'react-dom';
import Portal from './Portal';

const ModalContainer = (): JSX.Element => {
	return createPortal(<Portal />, document.body);
};

export default ModalContainer;
