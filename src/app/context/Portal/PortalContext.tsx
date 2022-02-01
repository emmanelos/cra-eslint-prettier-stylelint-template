import { createContext } from 'react';

interface PortalInitialState {
	id: string;
	portal: boolean;
	togglePortal: () => void;
}

const PortalContext = createContext<PortalInitialState>(null!);

export default PortalContext;
