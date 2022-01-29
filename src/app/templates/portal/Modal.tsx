import './Modal.scss';

interface Props {
	id: string;
	children: React.ReactNode;
	modal: boolean;
}

const Modal = ({ id, modal }: Props): JSX.Element => {
	return (
		<div id={id} className="portal">
			<div className="modal">
				<p className="modal__title">Thinking with portals</p>
				<button>Hola</button>
			</div>
		</div>
	);
};

export default Modal;
