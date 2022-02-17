import { createContext } from 'react';

interface PortalInitialState {
	id: string;
	portal: boolean;
	togglePortal: () => void;
}

export const PortalContext = createContext<PortalInitialState>(null!);
