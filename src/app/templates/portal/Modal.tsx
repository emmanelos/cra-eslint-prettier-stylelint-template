import { Dispatch, SetStateAction } from 'react';
import './Modal.scss';

interface Props {
	id: string;
	modal: boolean;
	setModal?: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ id, modal, setModal }: Props): JSX.Element => {
	const handlePortal = () => {
		setModal!(!modal);
	};

	return (
		<>
			{modal && (
				<>
					<div id={id} className="portal" onClick={handlePortal}></div>
					<section className="modal">
						<p className="modal__title">Thinking with portals</p>
						<button>Hola</button>
					</section>
				</>
			)}
		</>
	);
};

export default Modal;
