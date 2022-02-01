import { ReactNode } from 'react';

export interface Portal {
	id: string;
	portal: boolean;
	togglePortal: () => void;
}

export interface PortalInitialState {
	id?: string;
	portal: boolean;
}

export interface PortalAction {
	type: string;
	payload: boolean;
}

export interface PortalStateProps {
	children: ReactNode;
}
