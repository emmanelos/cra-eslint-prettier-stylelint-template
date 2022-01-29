import { useRef } from 'react';

const useModal = (id: string) => {
	const modalRef = useRef<null | HTMLDivElement>(null);

	const getModal = () => {
		if (!modalRef.current) {
			modalRef.current = document.createElement('div');
		}
		const target = modalRef.current;
		target.setAttribute('id', 'modal');
		target.className = 'modal';
		return target;
	};

	return getModal();
};

export default useModal;
