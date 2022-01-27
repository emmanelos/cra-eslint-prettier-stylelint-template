import { useRef, useEffect } from 'react';

const createPortal = (id: string) => {
	const portal = document.createElement('div');
	portal.setAttribute('id', id);
	portal.className = id;
	return portal;
};

const addPortal = (rootElement: HTMLDivElement) => {
	if (document.body.lastElementChild) {
		document.body.insertBefore(
			rootElement,
			document.body.lastElementChild.nextElementSibling,
		);
	}
};

const useModal = (id: string) => {
	const modalRef = useRef<null | HTMLDivElement>(null);

	useEffect(
		function setupPortal() {
			const existingPortal: HTMLDivElement | null = document.querySelector(
				`#${id}`,
			);

			const portal = existingPortal || createPortal(id);

			if (!existingPortal) {
				addPortal(portal);
			}

			portal.appendChild(modalRef.current!);

			return function removePortal() {
				if (modalRef.current) {
					modalRef.current.remove();
				}
				if (!portal.childElementCount) {
					portal.remove();
				}
			};
		},
		[id],
	);

	const getModal = () => {
		if (!modalRef.current) {
			modalRef.current = document.createElement('div');
			modalRef.current.className = 'modal';
		}
		return modalRef.current;
	};

	return getModal();
};

export default useModal;
